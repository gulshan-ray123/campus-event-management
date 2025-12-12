
const scheduleModel= require('../Models/ScheduleRegistration');

const getAllEvent= async(req,res)=>{
  const events = await scheduleModel.find();
  res.json(events);
}

module.exports= getAllEvent;
