// // ROUTE FOR SCHEDULING EVENT.


// const scheduleModel= require('../Models/ScheduleRegistration');
// const cloudinary= require('cloudinary');
// const fs= require('fs');
// const { promisify } = require('util');
// const unlinkAsync = promisify(fs.unlink);

// require('dotenv').config();

// // cloudinary Setup;

// cloudinary.v2.config({ 
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// const scheduleEvent=async(req,res)=>{
//     const{eventID, eventName, eventDate, openTime, closeTime, venue, theme, description, passType, orgDepartment, totalTicket, chiefGuest
//      }= req.body;

//       try{
// const uploadFile = async (file) => {
//       if (!file) return null;
//       const filePath = path.resolve(file.path);
//       const result = await cloudinary.uploader.upload(filePath, { folder: 'events' });
//       await unlinkAsync(filePath);
//       return result.secure_url;
//     };

//     const uploadBanner = await uploadFile(req.files['eventBanner']?.[0]);
//     const guestImg1 = await uploadFile(req.files['guest_img1']?.[0]);
//     const guestImg2 = await uploadFile(req.files['guest_img2']?.[0]);
//     const guestImg3 = await uploadFile(req.files['guest_img3']?.[0]);


//      const eventDetails= await scheduleModel.create({
//         eventID,
//         eventName,
//         eventDate,
//         openTime,
//         closeTime,
//         venue,
//         theme,
//         description,
//         eventBanner:uploadBanner.secure_url,
//         guest_img1:guestImg1.secure_url,
//         guest_img2:guestImg2.secure_url,
//         guest_img3:guestImg3.secure_url,
//         passType,
//         orgDepartment,
//         totalTicket,
//         chiefGuest
//      });

//      console.log(eventDetails);

//      return res.status(200).json({msg:"Event Registered successfully"});

//       }
//       catch(error){
//         console.error('❌ Event Creation Error:', err);
//     return res.status(400).json({ error: 'Internal Server Error' });

//       }
// }

// module.exports= scheduleEvent;


// controllers/eventController.js
const scheduleModel = require('../Models/ScheduleRegistration');
const cloudinary = require('cloudinary');
const fs = require('fs');
const path = require('path'); // added
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
require('dotenv').config();

// cloudinary Setup;
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const scheduleEvent = async (req, res) => {
  const {
    eventID,
    eventName,
    eventDate,
    openTime,
    closeTime,
    venue,
    theme,
    description,
    passType,
    orgDepartment,
    totalTicket,
    chiefGuest,
  } = req.body;

  try {
 const uploadFile = async (file) => {
  if (!file) return null;
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "events",
  });
  fs.unlinkSync(file.path);
  return result.secure_url;
};


    // safe access in case req.files is undefined
    const files = req.files || {};


const uploadBanner = await uploadFile(files.eventBanner?.[0] || null);
const guestImg1    = await uploadFile(files.guest_img1?.[0] || null);
const guestImg2    = await uploadFile(files.guest_img2?.[0] || null);
const guestImg3    = await uploadFile(files.guest_img3?.[0] || null);




    const eventDetails = await scheduleModel.create({
      eventID,
      eventName,
      eventDate,
      openTime,
      closeTime,
      venue,
      theme,
      description,
      // each of these may be null if the upload was skipped
      eventBanner: uploadBanner || null,
      guest_img1: guestImg1 || null,
      guest_img2: guestImg2 || null,
      guest_img3: guestImg3 || null,
      passType,
      orgDepartment,
      totalTicket,
      chiefGuest,
    });

    console.log('Event created:', eventDetails._id || eventDetails);
    return res.status(200).json({ msg: 'Event Registered successfully', event: eventDetails });
  } catch (error) {
    console.error('❌ Event Creation Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { scheduleEvent };
