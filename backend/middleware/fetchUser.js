const jwt = require('jsonwebtoken');
const SECRET_KEY = "thisisdoccare";

const fetchUser = async (req,res,next)=>{
    const token = req.headers.token;

    try {
        jwt.verify(token,SECRET_KEY);
        next();
    } catch (error) {
        return res.json({msg: "Wrong token!"});
    }
}

module.exports = fetchUser;