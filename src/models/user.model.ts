import mongoose, {
  Schema, 
  Document,
  Types
} from "mongoose";

type follow = Array<{
  userID: Types.ObjectId
}>


interface IUser extends Document {
  username: string
  password: string
  email: string
  followers: follow
  following: follow
}


const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: [50, "username must be less than 50 characters"],
    minlength: [3, 'username cannot be less than 3 characters'],
    match: [/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"],
    validate: {
      validator: function (value) {
        return !/\s/.test(value); // Ensure no spaces in the username
      },
      message: "Username cannot contain spaces",
    },
  },


  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true, // Ensures emails are stored in lowercase
    trim: true, // Removes extra spaces
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
    validate: {
      validator: async function (value) {
        const existingUser = await mongoose.models.User.findOne({ email: value });
        return !existingUser; // Ensures email is unique (Mongoose's `unique` isn't a validator)
      },
      message: "Email is already in use",
    },
  },

  followers: [{
     type: Schema.Types.ObjectId,
     ref: 'User'
  }],

  following: [{
     type: Schema.Types.ObjectId,
     ref: 'User'
  }]
  
}, {timestamps: true})