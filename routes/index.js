import express from 'express';
import postsRouter from './postRoutes.js';
const router = express.Router()

router.use('/api/v1/', postsRouter);

export default router;