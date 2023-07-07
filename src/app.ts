import express from "express";
import "dotenv/config";

import { connect } from "./lib/mongoose";
import appRoutes from "./routes";

export const app = express();

connect();

app.use(express.json());
app.use(appRoutes);
