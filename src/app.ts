import express from "express";

import userRouter from "./routes/user";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
