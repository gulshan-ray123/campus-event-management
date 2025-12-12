// ROUTE FOR ADMIN LOGIN

const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const adminModel= require('../Models/masterEmployeeDB');
require('dotenv').config()
const jwtSecretKey= process.env.JWT_SECRET_KEY;

const adminLogin = async(req,res)=>{

    const{emp_id,password}=req.body;
    

    const adminDetails= await adminModel.findOne({emp_id:emp_id});

    if(!adminDetails)return res.status(400).json({msg:"User Not found"});

    const isMatch= await bcrypt.compare(password, adminDetails.emp_password);

    if(!isMatch) return res.status(400).json({msg:"User Invalid Credentials"});

    const employeeID= adminDetails.emp_id;
    const adminToken= jwt.sign({employeeID}, jwtSecretKey, {expiresIn: "30d"} );

    //set to cookies
    res.cookie("adminToken", adminToken, {
        expires: new Date(Date.now()+ 30 * 24 * 60 * 60 * 1000),
        httpOnly:true,
    });

       return res.status(200).json({msg:"Admin Logged in Succesfully",  adminToken});
}

module.exports=adminLogin;