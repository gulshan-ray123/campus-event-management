// //LOGIC FOR EVENT REGISTRATION

// const eventModel=require('../Models/EventRegistration');
// const masterModel= require('../Models/masterdatabase');
// const bcrypt=require('bcrypt');
// const QRCode = require('qrcode');
// const nodemailer = require('nodemailer');
// const EMAIL= process.env.EMAIL;
// const PASS=process.env.PASS;

// require('dotenv').config();


// const eventRegister=async(req,res)=>{
// const{studentId,name,email,password,department,year,event}=req.body;
//     try {
//         const tokenEmail = req.user?.email;  
//             if (!tokenEmail) {
//       return res.status(401).json({ msg: "Unauthorized: No token email found" });
//     }


//         const userDetails= await masterModel.findOne({email:email});
//         if(!userDetails){
//             res.status(400).json({msg:"user not found"});
//         }

//         if((userDetails)&&(userDetails.studentId==studentId)){
//             const result= bcrypt.compare(password,userDetails.password);
//                 if(!result)res.status(400).json({msg:"password invalid"})

//                 const registerGenerated= await eventModel.create({
//                     studentId:studentId,
//                     name:name,
//                     email:email,
//                     department:department,
//                     year:year,
//                     event:event,
//                 })
//             console.log(registerGenerated);
//              if(registerGenerated){
//         const payload = JSON.stringify({
//                 studentId,
//                 email: tokenEmail,
//                 event,
//                 registeredAt: Date.now(),
//     });
//     const qrDataUrl = await QRCode.toDataURL(payload);

//      // ✅ Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,

//       auth: {
//         user: "gulshankumarray41@gmail.com",
//         pass: "jljnorrmjaqmzksk",
//       },
//     });
//       console.log(process.env.EMAIL, process.env.PASS);
      
//     await transporter.sendMail({
//       from: `"Event Portal Of GNIOT" `,
//       // to:tokenEmail, 
//       to: registerGenerated.email,
//       subject: `Event Registration Successful - ${event}`,
//       html: `
//         <h3>Hello ${name},</h3>
//         <p>You are successfully registered for <b>${event}</b>.</p>
//         <p>Here is your QR code for entry:</p>
//         <img src="${qrDataUrl}" alt="Event QR Code"/>
//       `,
//     });
//       res.status(200).json({msg:"Event Registered Succesfully"});
//       console.log(tokenEmail);
      
//         }
//         else{
//             res.status(400).json({msg:"User not Registerd succesfully"});
//         }
//         }
//         else{
//             res.status(400).json({msg:"Invalid Credentials"});
//         }       
//     } catch (error) {
//         console.log("EventRegister",error);
//     }
// }

// module.exports=eventRegister;


const eventModel = require('../Models/EventRegistration');
const masterModel = require('../Models/masterdatabase');
const bcrypt = require('bcrypt');
const QRCode = require('qrcode');
const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');   
const scheduleModel= require('../Models/ScheduleRegistration');
const qrModel= require('../Models/qrId');
require('dotenv').config();


const eventRegister = async (req, res) => {
  const { studentId, name, email, password, department, year, eventID } = req.body;
  try {
    const tokenEmail = req.user?.email;
    if (!tokenEmail) {
      return res.status(401).json({ msg: "Unauthorized: No token email found" });
    }

    const userDetails = await masterModel.findOne({ email: email });

    const scheduleDetails= await scheduleModel.findOne({eventID});

    if (!userDetails) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (userDetails && userDetails.studentId == studentId) {
      const result = await bcrypt.compare(password, userDetails.password);
      if (!result) return res.status(400).json({ msg: "Password invalid" });

      const registerGenerated = await eventModel.create({
        studentId,
        name,
        email,
        department,
        year,
        event,
      });

      if (registerGenerated) {
        const payload = JSON.stringify({
          studentId,
          email: tokenEmail,
          event,
          registeredAt: Date.now(),
        });
        const qrDataUrl = await QRCode.toDataURL(payload);

        const qrData= await qrModel.create({
          qrDataUrl
        })

        console.log(qrData);
        

        if(!scheduleDetails){
          res.status(400).json({msg:"Schedule Not found"});
        }

        // ✅ Build HTML for ticket
        const htmlContent = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h3 { color: #333; }
                img { margin-top: 10px; width: 200px; height: 200px; }
                td{
                    padding: 2.5px;
                    text-align: center;
                }
                th{
                    padding: 2.5px;
                }
              </style>
            </head>
            <body>
                <header>
                    <span><img src="https://th.bing.com/th/id/R.124123e58935f5c7c1c97617027f8675?rik=cNc6W1YSEu9AEQ&riu=http%3a%2f%2fwww.gniot.net.in%2fimg%2fgniot-engg-logo.jpg%3fV%3d1&ehk=tzRIrTJZfxV2nIAmzGm89ot6d2Teq7VuSuGgQUsbuRQ%3d&risl=&pid=ImgRaw&r=0" style="height: 50px; width: 200px;"></span>
                    <h3 style="text-align: center; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; margin-top: -30px; margin-left: 150px;">COLLEGE EVENT PASS INFORMATION</h3></header>
                    <div style="margin-top: 100px;">
              <h3 style="margin-top: -50px;">Hello Mr. ${registerGenerated.name},</h3>
              <p>You are successfully registered for <b>${registerGenerated.event}</b>.</p>
               <table border="2">
                <tr>
                    <th colspan="8">VISITORS INFORMATION/ EVENT DETAILS</th>
                </tr>
                <tr>
                    <th>
                        Vistor Full Name
                    </th>
                    <td>${registerGenerated.name}</td>
                    <th>Student ID</th>
                    <td>${registerGenerated.studentId}</td>

                    <th>Course</th>
                    <td>${registerGenerated.department}</td>
                    <th>Year</th>
                    <td>${registerGenerated.year}</td>
                </tr>

                 <tr>
                    <th>
                        Event Name
                    </th>
                    <td>${registerGenerated.event}</td>
                    <th>Event ID</th>
                    <td>${scheduleDetails.eventID}</td>

                    <th>Event Date</th>
                    <td>${scheduleDetails.eventDate}</td>
                    <th>Duration</th>
                    <td></td>
                </tr>

                   <tr>
                    <th>
                       Pass Type
                    </th>
                    <td>${scheduleDetails.passType}</td>
                    <th>Organising Department</th>
                    <td>${scheduleDetails.orgDepartment}</td>

                    <th>Seat Number Alloted</th>
                    <td>${scheduleDetails.totalTicket}</td>
                    <th>Event Venue</th>
                    <td>${scheduleDetails.venue}</td>
                </tr>

                   <tr>
                    <th>
                     Chief Guest
                    </th>
                    <td>${scheduleDetails.chiefGuest}</td>

                    <th>Theme </th>
                    <td>${scheduleDetails.theme}</td>
                    <th>Contact No.</th>
                    <td>${req.user.phone}</td>
                </tr>
                <tr>
                    <th colspan="4">ENTRY CODE OF CONDUCT + PENALITIES</th>
                    <th colspan="4">
                     <p>Here is your QR code for entry:</p>
             
                    </th>
                </tr>

                <tr>
                    <td colspan="4"> Use your own valid QR pass — duplication leads to cancellation and ₹1000 fine.</td>
                    <td rowspan="6">       
              <img src="${qrDataUrl}" alt="Event QR Code"/> 
                    </td>
                </tr>
                <tr>
                    <td colspan="4"> Respect fellow attendees — harassment or offensive behavior results in expulsion and ₹2000 fine.</td>
                </tr>
                <tr>
                    <td colspan="4">- No prohibited items allowed — violation incurs ₹1500 fine and removal from venue.</td>
                </tr>
                 <tr>
                    <td colspan="4">- Follow event timings and instructions — repeated disruption costs ₹500 and removal.</td>
                </tr>
                 <tr>
                    <td colspan="4"> Unauthorized recording is banned — breach leads to ₹1000 fine and deletion of content.</td>
                </tr>
                 <tr>
                    <td colspan="4">- Organizers reserve the right to cancel entry for misconduct without refund.</td>
                </tr>
               </table>


              <!-- <p>Here is your QR code for entry:</p>
              <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="Event QR Code"/> -->
              </div>
            </body>
          </html>
        `;

        // ✅ Generate PDF using puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: "networkidle0" });
        await page.pdf({ path: "ticket.pdf", format: "A4", printBackground: true });
        await browser.close();

        // ✅ Nodemailer transporter
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
              user: process.env.EMAIL?.trim(),
              pass: process.env.PASS?.trim(),
          },
        });

        await transporter.sendMail({
          from: `"Event Portal Of GNIOT" <${process.env.EMAIL}>`,
          to: registerGenerated.email,
          subject: `Event Registration Successful - ${event}`,
          html: `
            <h3>Hello ${registerGenerated.name},</h3>
            <p>You are successfully registered for <b>${event}</b>.</p>
            <p>Here is your QR code for entry:</p>
            <img src="${qrDataUrl}" alt="Event QR Code"/>
            <p>Your ticket PDF is attached.</p>
          `,
          attachments: [
            {
              filename: "ticket.pdf",
              path: "ticket.pdf",   
            },
          ],
        });

        res.status(200).json({ msg: "Event Registered Successfully" });
      } else {
        res.status(400).json({ msg: "User not Registered successfully" });
      }
    } else {
      res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.log("EventRegister Error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = eventRegister;