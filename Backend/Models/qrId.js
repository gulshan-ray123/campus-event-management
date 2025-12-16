
const mongoose= require('mongoose');

const qrSchema= mongoose.Schema({
    qrDataUrl:{
        type:String,
        require:true,
    },
    isUsed:{
        type:Boolean,
        default:false,
    }
});

module.exports= mongoose.model('qrData',qrSchema);