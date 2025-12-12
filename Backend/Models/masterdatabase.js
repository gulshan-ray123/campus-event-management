const mongoose= require('mongoose');

const masterSchema= mongoose.Schema({
    studentId:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
   password:{
    type:String,
    require:true,
   }
})
module.exports=mongoose.model('masterDatabase',masterSchema);