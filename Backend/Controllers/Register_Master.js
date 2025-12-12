//LOGIC FOR REGISTRATION FOR MASTER DATABASE

const masterModel= require('../Models/masterdatabase');
const bcrypt= require('bcrypt')

const masterRegistration=(req,res)=>{
    try {
        const {studentId,email,password}=req.body;

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
                const Register= await masterModel.create({
                    studentId:studentId,
                    email:email,
                    password:hash,
                });
                console.log(Register);
                res.status(200).json({msg:"Registration succesfully"});
            })
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports=masterRegistration;