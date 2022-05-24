import mongoose from "mongoose";

const dressSuggestionSchema = new mongoose.Schema({
  color: String,
  day: String,
  description: String,
  imgSrc: String,
});

const DressSuggestion = mongoose.model(
  "DressSuggestion",
  dressSuggestionSchema
);

export default DressSuggestion;
