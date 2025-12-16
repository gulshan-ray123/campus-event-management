const mongoose= require('mongoose');

const eventRegistationSchema= mongoose.Schema({
    studentId:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        reuire:true,
    },
    email:{
        type:String,
        require:true,
    },
    department:{
        type:String,
        require:true,
    },
    year:{
        type:String,
        require:true,
    },
    event:{
        type:String,
        require:true,
    },
})

module.exports=mongoose.model('eventRegister',eventRegistationSchema);

