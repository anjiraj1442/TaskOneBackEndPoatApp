import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();
// post api
router.post("/newpost",  userController.newPost)
// update post
 router.put("/update/:id", userController.updatePost)

export default router;