const eventModel = require('../Models/EventRegistration');

const deleteEvent= (req,res)=>{

try{
  const {eventId} = req.body;
  const eventName= eventModel.findOneAndDelete({eventId});
  
  return res.status(200).json({msg:"Event Id Successfully deleted"});
}
catch{
   console.log("EventDeletion Error:", error);
    res.status(500).json({ msg: "Server Error" });
}
}
