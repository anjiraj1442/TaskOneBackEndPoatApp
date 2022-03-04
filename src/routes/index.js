import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import newPost from './post.routes'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/post', newPost)
  return router;
};

export default routes;
