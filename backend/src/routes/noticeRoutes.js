import express from "express";
import { createNotice,getAllNotices,updateNoticeStatus,getSingleNotice,deleteNotice } from "../controllers/noticeController.js";


const router= express.Router();

router.post("/", createNotice);          
router.get("/", getAllNotices);          
router.get("/:id", getSingleNotice);     
router.patch("/:id/status", updateNoticeStatus); 
// router.patch("/:id", updateNotice);
router.delete("/:id", deleteNotice); 

export default router;