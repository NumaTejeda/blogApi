import express from 'express';
import { controllerImage } from "../controllers/imgController.js";
import { managerImage } from "../middlewares/middleImage.js"
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage()})


//Ruta para subir imagen a cloduinary

const router = express.Router();;

router.post('/uploadImage', upload.single('image'), managerImage.uploadImage, controllerImage.printUrl)

export default router;



