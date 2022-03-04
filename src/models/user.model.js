import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    email: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      require: true,

      trim: true
    },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
