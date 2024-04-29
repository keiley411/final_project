import { Router } from "express";
import multer from "multer";
import * as uuid from 'uuid'


const uploads_router = Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileId = uuid.v4()
    const filename = `${file.fieldname}-${fileId}-${file.originalname}`
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });


uploads_router.post("/uploads", upload.single("file"), (req, res) => {
  try {
    res.send({ status: "success", filePath:req.file.path });
  } catch (error) {
    res.status(500).send({ status: "fail", message: error.message });
  }
});
export default uploads_router;
