import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("User", usersSchema);
