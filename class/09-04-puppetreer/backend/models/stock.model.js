import mongoose from "mongoose";

const StockdSchema = new mongoose.Schema({
  name: String,
  date: Date,
  price: Number
})

export const Stock = mongoose.model("Stock", StockdSchema)