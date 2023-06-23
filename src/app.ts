import express from "express";
import "dotenv/config";

import { connect } from "./lib/mongoose";
import authRouter from "./routes/auth";

const app = express();
const port = 3001;

connect();

app.use(express.json());
app.use(authRouter);

app.listen(process.env.PORT || port, () => {
  console.log("Server running on http://localhost:" + port);
});
