import NewPost from '../models/newpost.model';

//create new post
export const newPost = async (body) => {
  console.log('data', body);
  const data = await NewPost.create(body);

  return data;
};

// update likes
export const likePost = async (req) => {
  const post = await NewPost.findOne({ _id: req.params._id });

  let likes = post.likes;

  const data = await NewPost.findOneAndUpdate(
    { _id: req.params._id },
    {
      $set: {
        likes: likes + 1
      }
    },
    { new: true }
  );
  return data;
};
// comment
export const commentPost = async (req) => {
  const commentspost = await NewPost.findOne({ _id: req.params._id });

  let commentobj = commentspost.comments;
  console.log('comment object', commentobj);

  let data = await NewPost.findByIdAndUpdate(
    { _id: req.params._id },
    {
      $push: {
        comments: req.body.comments
      }
    },
    { new: true }
  );
  return data;
};
