const bcrypt = require("bcryptjs");

const {User} = require("../../models/user");

const {RequestError} = require("../../helpers");

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw RequestError(401, "Email not found");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    // const comparePassword = await user.validatePassword(password);
    if(!comparePassword) {
        throw RequestError(401, "Password wrong");
    }
    const token = "125sgds.3153tae.e5234234";
    res.json({
        token,
    })
}

module.exports = login;