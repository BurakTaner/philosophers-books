import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

app.get("/api", (req,res) => {
  res.json({message: "This is default request endpoint for application"});
});

app.get("/api/allphilosophers", (req, res) => {
  res.json({ message: "I miss you so much" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT} !!`));
