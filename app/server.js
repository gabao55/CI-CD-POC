import express from "express";

const app = express();

app.get("/health", (req, res) => {
    res.send("Health OK")
});

app.listen(5000, () => {
  console.log("Running on 5000");
});

export { app };
