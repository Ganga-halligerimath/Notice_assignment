

import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
import noticeRoutes from "./routes/noticeRoutes.js"
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/notices", noticeRoutes);

connectDB();
const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
