import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: Number,
  name: String,
  phone: Number,
  email: String,
  password: String,
  token: String,
  isAdmin: Boolean,
  registered: Date,
});

const User = models.User || model("User", userSchema);
export default User;
