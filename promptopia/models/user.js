import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    require: [true, "Email is reqired!"],
  },
  username: {
    type: String,
    require: [true, "Username is reqired!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = model("User", UserSchema);

export default User;