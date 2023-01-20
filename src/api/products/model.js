import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["smartphones", "computers", "appliances"],
    },
    reviews: [
      {
        comment: {
          type: String,
          required: true,
          rate: { type: Number, max: 5, required: true },
          user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
          },
          reviewDate: { type: String },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Product", productsSchema);
