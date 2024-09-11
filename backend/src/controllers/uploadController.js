// backend/src/controllers/uploadController.js
import path from "path";
import fs from "fs";

class UploadController {
  static async uploadThumbnail(req, res) {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    return res.status(200).json({ path: filePath });
  }
}

export default UploadController;
