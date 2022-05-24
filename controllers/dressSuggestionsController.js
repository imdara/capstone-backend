import DressSuggestion from "../models/dressSuggestion.js";

export const getAllDressSuggestions = async (req, res) => {
  const { name } = req.user;
  const dressSuggestions = await DressSuggestion.find();
  res.status(200).send({ name, dressSuggestions });
};

export const postADressSuggestion = async (req, res) => {
  const { color, day, description, imgSrc } = req.body;
  const dressSuggestion = await DressSuggestion.create({
    color,
    day,
    description,
    imgSrc,
  });
  res.status(201).send(dressSuggestion);
};
