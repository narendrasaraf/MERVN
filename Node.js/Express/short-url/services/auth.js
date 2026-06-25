const jwt = require("jsonwebtoken");
// Note: Keep your secret key safe (ideally in an environment variable .env)
const secret = "Narendra$123@"; 

// Generates a JWT token for a user
function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        }, 
        secret
    );
}

// Verifies the incoming JWT token and returns user details
function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};