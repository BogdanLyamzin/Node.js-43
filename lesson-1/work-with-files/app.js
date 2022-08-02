const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async({filepath, action, data})=> {
    try {
        switch(action) {
            case "read":
                const text = await fs.readFile(filepath, "utf-8");
                console.log(text);
                // const fileData = await fs.readFile(filepath);
                // const text = fileData.toString();
                // console.log(text);
                break;
            case "add":
                const result = await fs.appendFile(filepath, data);
                console.log(result);
                break;
            case "replace":
                const result2 = await fs.writeFile(filepath, data);
                console.log(result2);
                break;
            default:
                console.log("Unknown action");
        }
    } catch (error) {
        console.log(error.message);
    }
}

// fileOperation({filepath: "./files/file.txt", action: "read"})
// fileOperation({filepath: "./files/file2.txt", action: "add", data: "\nНицше"})
fileOperation({filepath: "./files/file3.txt", action: "replace", data: "Ницше"})

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


