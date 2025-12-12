const dotenv= require('dotenv');
dotenv.config();
const jwt= require('jsonwebtoken');
const jwtSecretKey= process.env.JWT_SECRET_KEY;

const adminAuth=(req,res,next)=>{

    const adminToken= req.cookies.adminToken;

    console.log(adminToken);
    
    if(!adminToken)return res.status(400).json({msg:"No Token"});

    try {
        const decodedToken= jwt.verify(adminToken,jwtSecretKey);

        console.log(decodedToken);

        req.admin= decodedToken;

        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({ msg: "Invalid Token" });
    }
}

module.exports= adminAuth;