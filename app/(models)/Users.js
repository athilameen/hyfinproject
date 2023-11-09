import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  role: {
    type: String
  },
},
{ timestamps: true }
);


let users
try {
    users = mongoose.model('users')
} catch (error) {
    users = mongoose.model('users', userSchema)
}

//const users = mongoose.model.users || mongoose.model('users', userSchema);

export default users;