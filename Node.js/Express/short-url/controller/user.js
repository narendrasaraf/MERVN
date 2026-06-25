const User = require("../models/user");
const { setUser } = require("../services/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    
    if (!user) {
        return res.render("login", {
            error: "Invalid Username or Password",
        });
    }

    // 1. Generate the token by passing the user object to setUser
    const token = setUser(user);
    
    // 2. Store the JWT token in the cookies (using "token" as the cookie name)
    res.cookie("token", token);
    
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};