const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const booksPath = path.join(__dirname, "books.json");

const updateBooks = async (books) => {
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
}

const getAll = async () => {
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}

const getById = async(id) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    return result || null;
}

const add = async ({title, author}) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        title,
        author,
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

const removeById = async(id) =>{
    const books = await getAll();
    const idx = books.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const [result] = books.splice(idx, 1);
    await updateBooks(books);
    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    removeById,
}