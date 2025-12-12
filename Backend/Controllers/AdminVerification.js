//ROUTE FOR ADMIN VERIFICATION.

const organiserModel= require('../Models/OrganiserRegistration');
const masterModel=  require('../Models/masterdatabase');

const adminVerify= async(req,res)=>{
    try {

        const{studentId,status}= req.body;

        const studentDetail= await masterModel.findOne({studentId:studentId});

        console.log(studentDetail);

        if(studentDetail){
            const updatedUserStatus= await organiserModel.findOneAndUpdate({studentId},{
                $set:{
                     verification_status:status,
                      
                }
            })
        }
        
        
    } catch (error) {
        
    }
}

module.exports= adminVerify;