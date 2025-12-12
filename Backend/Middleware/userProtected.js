const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');
const jwtSecretKey= process.env.JWT_SECRET_KEY;
dotenv.config();

const requireUserAuth=(req,res,next)=>{
    const token= req.cookies.token;

    if(token){
        jwt.verify(token,jwtSecretKey,(err,decodedToken)=>{
            if(err)res.status(400).json({msg:"Invalid"})

                else{
                    res.status(400).json({msg:"Token found Valid User"});
                    console.log(decodedToken);
                    req.user= decodedToken;
                    next(); 
                }
        })
    }
    else{
        res.status(400).json({msg:"Invalid Token"});
    }
}
module.exports= requireUserAuth;