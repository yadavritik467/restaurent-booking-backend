import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/routes.js";
import { connectDb } from "./db/db.js";

const app = express();

const port = 4500;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

connectDb();

app.use("/", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Hello bro . .");
});

app.listen(port, () => {
  console.log("server is working !!");
});
