// Login for Organiser

const { sign } = require('jsonwebtoken');
const organiserModel= require('../Models/OrganiserRegistration');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();

const jwtSecretKey=process.env.JWT_SECRET_KEY;

const OrganiserLogin=async(req,res)=>{
    try {
        const {collegeId,secretKey, password}=req.body;

        const str= "GNIOT@";

        const key= str.concat(Math.random()*1000);

        const Organiser= await organiserModel.findOne({collegeId});

        if(!Organiser)return res.status(400).json({msg:"Organiser not find"});

        const isMatch= await bcrypt.compare(password,Organiser.password);

        if(!isMatch)return res.status(400).json({msg:"Invalid credentials"});

        if(Organiser.secretKey!=secretKey)return res.status(400).json({msg:"Secret key wrong"});

        // Generate Token,
        const ID= Organiser.collegeId;

        const organiserToken= jwt.sign({ID}, jwtSecretKey, {expiresIn:'30d'});

        // SET TOKEN INTO COOKIE;

        res.cookie("'organiserToken'", organiserToken ,{
            expires: new Date(Date.now()+ 30 * 24 * 60 * 60 * 1000),
            httpOnly:true,
        });

        console.log(organiserToken);
        
       return res.status(200).json({msg:"Organiser Login Sucessfull", organiserToken});

    } catch (error) {
        console.log(error);
        
    }
}

module.exports= OrganiserLogin;