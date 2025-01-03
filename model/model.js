import mongoose from "mongoose";

const bookingModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    contact: {
      type: Number,
      unique: true,
      required: [true, "Contact is required"],
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Contact must be a 10-digit number",
      },
    },
    guests: {
      type: Number,
      required: [true, "Number of guests is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    timeSlot: {
      type: String,
      required: [true, "Time is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const bookingSchema = mongoose.model("Booking", bookingModelSchema);
