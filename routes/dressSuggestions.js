import { Router } from "express";
import {
  getAllDressSuggestions,
  postADressSuggestion,
} from "../controllers/dressSuggestionsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router()
  .get("/", authMiddleware, getAllDressSuggestions)
  .post("/", postADressSuggestion);

export default router;
