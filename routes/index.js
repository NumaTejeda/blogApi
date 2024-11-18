import express from 'express';
import postsRoutes from './postRoutes.js';
import imageRoutes from  './imageRoutes.js';
const router = express.Router()

router.use('/api/v1/', postsRoutes);
router.use('/api/v1/', imageRoutes);

export default router;

//router.use('/api/v1/auth', authRoutes)