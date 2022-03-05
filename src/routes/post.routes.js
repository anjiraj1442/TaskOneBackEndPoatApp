import express from 'express';
import * as postController from '../controllers/post.controller';

const router = express.Router();
// post api
router.post("/newpost",  postController.newPost)
// update post
 router.put("/like/:_id", postController.likePost)
// upadte comment
router.put('/comment/:_id', postController.commentPost)
export default router;