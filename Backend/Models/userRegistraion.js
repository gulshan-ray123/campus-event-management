const mongoose= require("mongoose");

const dotenv= require("dotenv");
dotenv.config();
const db= process.env.MONGO_URI;

mongoose.connect(db);

const userSchema= mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

    phone:{
        type:Number,
        require:true
    },

    password:{
        type:String,
        require:true,
    },

    dob:{
        type:String,
        require:true
    }
});

module.exports= mongoose.model('RegisterUser',userSchema);