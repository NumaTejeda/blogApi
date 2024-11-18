import express from 'express';
import { controllerImage } from "../controllers/imgController.js";
import { managerImage } from "../middlewares/middleImage.js"
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage()})


//Ruta para subir imagen a cloduinary

const router = express.Router();;

router.post('/uploadImage', upload.single('image'), managerImage.uploadImage, controllerImage.printUrl)
router.get('/allImages', managerImage.getAllImage); 
router.delete('/deleteImage/:id', managerImage.deleteImageWithId);


// router.patch('/image/:id') // actualizar imagenen post (trae la url de una imagen ya subida y la cambiar en el post)


export default router;



