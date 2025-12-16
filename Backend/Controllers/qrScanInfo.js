// routes/scan.js

const Ticket= require('../Models/qrId');

const qrScannerDecoded= async(req,res)=>{

     const { qrId } = req.body;

  const ticket = await Ticket.findOne({ qrId });

  if (!ticket) {
    return res.status(404).json({ success: false, message: "Invalid QR" });
  }

    if (ticket.isUsed) {
    return res.status(403).json({
      success: false,
      message: "QR already scanned ❌ Access Denied",
    });
  }

  ticket.isUsed = true;
  await ticket.save();

  return res.json({
    success: true,
    message: "Access Granted ✅",
  });

}



// router.post("/scan", async (req, res) => {
//   const { qrId } = req.body;

//   const ticket = await Ticket.findOne({ qrId });

//   if (!ticket) {
//     return res.status(404).json({ success: false, message: "Invalid QR" });
//   }

//   if (ticket.isUsed) {
//     return res.status(403).json({
//       success: false,
//       message: "QR already scanned ❌ Access Denied",
//     });
//   }

//   ticket.isUsed = true;
//   await ticket.save();

//   res.json({
//     success: true,
//     message: "Access Granted ✅",
//   });
// });

module.exports= qrScannerDecoded;
