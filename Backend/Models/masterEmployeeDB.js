
const mongoose= require('mongoose');

const masterEmployeeSchema= mongoose.Schema({
    emp_id:{
        type:Number,
        require:true,
    },
    emp_name:{
        type:String,
        require:true,
    },
    designation:{
        type:String,
        require:true,
    },
    emp_email:{
        type:String,
        require:true,
    },
    emp_password:{
        type:String,
        require:true,
    },
    Branch:{
        type:String,
        require:true,
    },
})

module.exports=mongoose.model('EmployeeRegistration',masterEmployeeSchema);