import express from 'express';
import { managerImage } from "../controllers/imgController.js";

const router = express.Router();;

router.post('/uploadImage', managerImage.uploadImage)

export default router;



