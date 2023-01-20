import express from "express";

const app = express();

app.get("/health", (req, res) => {
    res.send("ok")
});

app.listen(4000, () => {
  console.log("Running on 4000");
});