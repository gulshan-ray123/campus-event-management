// const jwt= require('jsonwebtoken');

// const dotenv= require('dotenv');
// dotenv.config();
// const jwtSecretKey= process.env.JWT_SECRET_KEY;

// const requireUserAuth=(req,res,next)=>{
//     const token= req.cookies.token;
//     console.log(token);

//     if(token){
//         jwt.verify(token,jwtSecretKey,(err,decodedToken)=>{
//             if(err)res.status(400).json({msg:"Invalid"})

//                 else{
//                     res.status(400).json({msg:"Token found Valid User"});
//                     console.log(decodedToken);
//                     req.user= decodedToken;
//                     next(); 
//                 }
//         })
//     }
//     else{
//         res.status(400).json({msg:"Invalid Token"});
//     }
// }
// module.exports= requireUserAuth;



const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const requireUserAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];

  console.log("Token after remove:  ", token);
  

  jwt.verify(token, jwtSecretKey, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ msg: "Invalid Token" });
    }

    req.user = decodedToken; // attach user info
    next(); // ✅ allow request
  });
};

module.exports = requireUserAuth;
