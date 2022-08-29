const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = {
    id: "630902f9e355d44e25a1133e"
};

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDkwMmY5ZTM1NWQ0NGUyNWExMTMzZSIsImlhdCI6MTY2MTc5MTUwOCwiZXhwIjoxNjYxNzk1MTA4fQ.pzThvDzYeTLlWcy1UpICMAKhg_7EHfI4F7Rq2KvdYti"

try {
    const result = jwt.verify(wrongToken, SECRET_KEY);
    console.log(result);
} catch (error) {
    console.log(error.message);
}