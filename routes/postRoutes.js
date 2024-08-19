import express from 'express';
import { managerPost } from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', managerPost.getAllPosts);
router.post('/posts', managerPost.addPost);
router.delete('/posts/:id', managerPost.deletePost);
router.put('/posts/:id', managerPost.updatePost);

export default router;