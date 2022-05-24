// importing modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

// importing routes
import usersRoute from "./routes/users.js";
import dressSuggestionsRoute from "./routes/dressSuggestions.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// implementing routes
app.use("/users", usersRoute);
app.use("/dressSuggestions", dressSuggestionsRoute);

app.get("/", (req, res) =>
  res.status(200).send({ status: "OK", message: "Server working" })
);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE_URL || "mongodb://localhost/mydb", {
    useNewUrlParser: true,
  })
  .then(app.listen(PORT, () => console.log("Connected to the database")))
  .catch((err) => console.log(err));
