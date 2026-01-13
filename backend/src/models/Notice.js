import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  noticeType: { type: String, required: true }, // important!
  status: { type: String, enum: ["Draft", "Published"], default: "Draft" },
}, { timestamps: true });

export default mongoose.model("Notice", noticeSchema);
