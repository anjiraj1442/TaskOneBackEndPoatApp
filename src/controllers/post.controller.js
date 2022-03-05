
import HttpStatus from 'http-status-codes';
import * as PostService from '../services/post.services';


export const newPost = async (req, res, next) => {
     try {
       const data = await PostService.newPost(req.body);
       res.status(HttpStatus.CREATED).json({
         code: HttpStatus.CREATED,
         data: data,
         message: 'Post created successfully'
       });
     } catch (error) {
       next(error);
     }
   };


   // new post
export const likePost = async (req, res, next) => {
     try {
       const data = await PostService.likePost(req);
       res.status(HttpStatus.CREATED).json({
         code: HttpStatus.CREATED,
         data: data,
         message: 'Post Added successfully'
       });
     } catch (error) {
       next(error);
     }
   };
   
   
   
   
   
// new post
export const commentPost = async (req, res, next) => {
     try {
       const data = await PostService.commentPost(req);
       res.status(HttpStatus.CREATED).json({
         code: HttpStatus.CREATED,
         data: data,
         message: 'Post Added successfully'
       });
     } catch (error) {
       next(error);
     }
   };
   
   
   
   
   
      