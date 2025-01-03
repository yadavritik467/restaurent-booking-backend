import { bookingSlotData } from "../data/data.js";
import { bookingSchema } from "../model/model.js";

export const getAllTimelineSlots = async (req, res) => {
  try {
    const { date } = req.query;
    const availableSlots = bookingSlotData?.find(
      (booking) => booking.date === date
    );
    if (!availableSlots) {
      return res.status(404).json({ availableSlots: [] });
    } else {
      let bookedSlots = await bookingSchema.find({ date }).select("timeSlot");
      bookedSlots = bookedSlots?.length
        ? bookedSlots?.map((book) => book?.timeSlot)
        : [];

      return res.status(200).json({
        availableSlots: availableSlots?.slots,
        bookedSlots,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server err" });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { name, date, timeSlot, ...rest } = req.body;
    const guests = Number(rest.guests);
    const contact = Number(rest.contact);
    const isExistingContact = await bookingSchema.findOne({ contact });
    const isExistingBook = await bookingSchema.findOne({ date, timeSlot });
    if (isExistingContact) {
      return res
        .status(400)
        .json({ message: "Booking is already exist with this number " });
    } else if (isExistingBook) {
      return res
        .status(400)
        .json({ message: "Booking is already exist with this date and time " });
    } else {
      await bookingSchema.create({
        name,
        contact,
        guests,
        date,
        timeSlot,
      });
      return res
        .status(200)
        .json({ message: "booking successfully created !!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server err" });
  }
};
