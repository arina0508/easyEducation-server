import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    FIO: {
      type: String,
      default: "",
      min: 2,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Мужской", "Женский"],
    },
    phone: {
      type: String,
      required: true,
      min: 18,
      max: 18,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    education: {
      type: String,
    },
    subject: {
      type: String,
    },
    qualification: {
      type: String,
    },
    experience: {
      type: String,
    },
    description: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "repetitor"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
