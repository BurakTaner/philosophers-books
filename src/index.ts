import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/api/allphilosophers", (req, res) => {
  res.json({message: "I miss you so much"});
});

app.listen(PORT, () => console.log(`Listening on ${3000}`));
