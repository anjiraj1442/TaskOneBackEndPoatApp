import User from '../models/user.model';
import NewPost from '../models/newpost.model'
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config('../.env')


//create new user
export const newUser = async (body) => {
  console.log("aghsghd",body);
  const HashedPassword = await bcrypt.hash(body.password, 8);
  console.log("hashed password", HashedPassword);
  body.password = HashedPassword;
  const data = await User.create(body);
  console.log("anji",data);
  return data;
};

// login in service file

export const login = async (body) => {
  const check = await User.findOne({ email: body.email });
  if (check) {
    const match = await bcrypt.compare(body.password, check.password);
    if (match) {
      const token = jwt.sign({ email: check.email, id: check._id}, 'tokenvalue', { expiresIn: '98h' });
     
      return token;
      
    } else {
      return 'Incorrect Password'
    }
  } else {
    return 'Not Registered Yet';
  }
};

//create new post
export const newPost = async (body) => {
  const data = await NewPost.create(body);
  console.log("data", data);
  return data;
};


// update post
export const upadtePost = async (req,res)=>{
  const post = await NewPost.findByIdAndUpdate(req.params.id)//upadte, 
  if(post.userId === req.body.userId){
  await post.updateOne({
    $set:req.body//+1
  },{new:true})
  
  }else{
   
  }
}











































//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

