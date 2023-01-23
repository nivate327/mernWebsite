const jwt=require("jsonwebtoken");
const User=require("../model/userSchema");

const authenticate=async(req, res, next)=>
{
    try {
        let token=req.cookies.jwtoken;
        let verifyToken=jwt.verify(token, process.env.SECRET_KEY);

        let rootUser=await User.findOne({_id:verifyToken._id, "tokens.token": token});

        if(!rootUser){
            throw new Error("User Not Found !")
        }

        req.token=token;
        req.rootUser=rootUser;
        req.userId=rootUser._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorized: No token Provided !");
        console.log(error);
    }

}

module.exports =authenticate;
