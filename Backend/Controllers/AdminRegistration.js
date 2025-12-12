// ADMIN REGISTRATION
const bcrypt= require('bcrypt');
const adminModel= require('../Models/masterEmployeeDB');
const registerAdmin= async(req,res)=>{
    try {
        const {emp_id, emp_name, designation, emp_email, confirm_pass, branch, security}=req.body;

        const salt= await bcrypt.genSalt(10);

        const hash=await bcrypt.hash(confirm_pass,salt);
        // console.log(process.env.SECRET_PIN);
        // console.log(security);
        
        console.log(typeof(security));
        console.log(typeof(process.env.SECRET_PIN));
        
        

        if(security.trim()==process.env.SECRET_PIN){
            const adminRegister= await adminModel.create({
                emp_id,
                emp_name,
                designation, 
                emp_email,
                emp_password:hash,
                branch
            })
            console.log(adminRegister);
            res.status(200).json({msg:"Employee Created Successfully"});
        }

        else{
            res.status(400).json({msg:"Security pin invalid"});
        }
    } catch (error) {
        console.log(error);  
    }
}

module.exports=registerAdmin;