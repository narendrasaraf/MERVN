const { getUser } = require("../services/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    // 1. Read 'token' instead of 'uid'
    const userUid = req.cookies?.token; 

    if (!userUid) return res.redirect("/login");
    
    // 2. getUser now decodes the JWT instead of looking it up in a Map
    const user = getUser(userUid); 

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    // 1. Read 'token' instead of 'uid'
    const userUid = req.cookies?.token;
    
    // 2. Decodes JWT token
    const user = getUser(userUid); 

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};