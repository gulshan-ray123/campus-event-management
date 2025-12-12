const mongoose= require("mongoose");


const organiserSchema= mongoose.Schema({
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
    },

    role:{
        type:String,
        require:true,
    },

    collegeId:{
        type:String,
    },

    secretKey:{
        type:String,
        require:true,
    },

    verification_status:{
        type:String,
        require:true,
    },
    approved_by:{
        type:String,
        require:true,
    },
    approved_date:{
        type:Date,
        require:true,
    }
});

module.exports= mongoose.model('RegisterOrganiser',organiserSchema);