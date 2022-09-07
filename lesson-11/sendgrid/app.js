const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "arestovich@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "2-3 недели максимум",
    html: "Погадали на картах Таро когда ждать нового наступления",
};

sgMail.send(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))