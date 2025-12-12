// Route for Organiser protected,

const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');

require('dotenv').config();

const jwtSecretKey= process.env.JWT_SECRET_KEY;

const organiserAuth= (req,res, next)=>{

    const organiserToken= req.cookies.organiserToken;

    console.log(organiserToken);

    if(!organiserToken)return res.status(400).json({msg:"Token not found"});

    try {

        const decodedToken= jwt.verify(organiserToken,jwtSecretKey);

        console.log(decodedToken);

        req.organiser= decodedToken;

        next();
        
        
    } catch (error) {
        
         console.log(error);
        return res.status(401).json({ msg: "Invalid Token" });

    }
}

module.exports= organiserAuth;