
// LOGIC FOR REGISTRATION

const userModel= require("../Models/userRegistraion");
const organiserModel= require("../Models/OrganiserRegistration");
const bcrypt= require('bcrypt');
const { date } = require("zod");
const Register= async(req,res)=>{
try {
   const {username,email,phone,password,dob,role,collegeId}= req.body;
  // For Attendee
   const salt= await bcrypt.genSalt(10);

   const hash= await bcrypt.hash(password,salt);

   const str= "GNIOT@"

   const key= str.concat(Math.floor(Math.random()*900)+100);
   
    let newUserRegistered;

    const normalizedRole = role.toLowerCase();
    
   if(normalizedRole=="attendee"){
    newUserRegistered= await userModel.create({
    username:username,
    email:email,
    phone:phone,
    password:hash,
    dob:dob,
    role:"Attendee"
    })
    console.log(newUserRegistered);
   res.status(200).json({msg:"New Attendee generated"},{newUserRegistered});
   }

   else{
    newUserRegistered= await organiserModel.create({
    username:username,
    email:email,
    phone:phone,
    password:hash,
    dob:dob,
    role:role,
    collegeId:collegeId,
    secretKey:key,
    verification_status:"Pending",
    approved_by:"",
    approved_date:Date.now()
    })
    console.log(newUserRegistered);
   res.status(200).json({msg:"New Organiser generated"});
   }
 }
  catch (error) {
    console.log(error);
}
}
module.exports=Register;