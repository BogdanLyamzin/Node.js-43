const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemalierConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD,
    }
};

const transporter = nodemailer.createTransport(nodemalierConfig);

const email = {
    to: "arestovich@gmail.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "2-3 недели максимум",
    html: "Погадали на картах Таро когда ждать нового наступления",
};

transporter.sendMail(email)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(error.message));
