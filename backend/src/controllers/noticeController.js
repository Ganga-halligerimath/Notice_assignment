import Notice from "../models/Notice.js";


//create notice
export const createNotice = async (req, res) => {
  try {
    const { title, content, noticeType, status } = req.body;

    // validation
    if (!title || !content || !noticeType) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields (title, content, noticeType) are required" 
      });
    }

    // save notice
    const notice = await Notice.create({
      title,
      content,
      noticeType,
      status: status || "Draft",  // default status
    });

    res.status(201).json({
      success: true,
      message: "Notice created successfully",
      data: notice,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//get all notice

export const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find(); // fetch all notices
    res.status(200).json({ success: true, data: notices });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


//toggle status(update)
export const updateNoticeStatus = async (req, res) => {
  try {
    const { status } = req.body; // must exist

    // validate
    if (!status || !["draft", "published"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const updated = await Notice.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Notice not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateNotice = async (req, res) => {
    try {
        const updatedNotice = await Notice.findByIdAndUpdate(
            req.params.id,
            req.body, // expects { title, content, noticeType }
            { new: true }
        );

        if (!updatedNotice) {
            return res.status(404).json({ success: false, message: "Notice not found" });
        }

        res.status(200).json({ success: true, data: updatedNotice });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

//get single notice

export const getSingleNotice = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params.id);



        res.status(200).json({ success: true, data: notice, });
    } catch (error) {
        res.status(400).json({ success: false, error: "Notice not found" });
    }
};

export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findByIdAndDelete(id);

    if (!notice) {
      return res.status(404).json({ success: false, message: "Notice not found" });
    }

    res.status(200).json({ success: true, message: "Notice deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

