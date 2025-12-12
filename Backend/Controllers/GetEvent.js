const scheduleModel = require("../Models/ScheduleRegistration");

const getSingleEvent = async (req, res) => {
  try {
    const eventID = req.params.eventID;

    const event = await scheduleModel.findOne({ eventID });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(event);
  } catch (error) {
    console.error("❌ Error in fetching event:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getSingleEvent;
