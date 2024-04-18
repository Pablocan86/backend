import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import multer from "multer";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);

const app = express();

const PORT = 8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "./descargas"));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalname = file.originalname;
    const ext = path.extname(originalname);
    cb(null, `${timestamp}_${originalname}`);
  },
});

const upload = multer({ storage });
app.use(express.static(path.join(__direname, "public")));
app.post(
  "/upload",
  upload.single("archivo", (req, res) => {
    res.json({ message: "Archivo subido exitosamente" });
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/* Markdown.es

https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax*/
