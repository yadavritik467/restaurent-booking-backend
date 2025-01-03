import express from "express";
import {
  createBooking,
  getAllTimelineSlots,
} from "../controller/controller.js";
const router = express.Router();

router.post("/create-booking", createBooking);
router.get("/all-booking");
router.get("/availability", getAllTimelineSlots);
router.delete("/delete-booking/:id");

export default router;
