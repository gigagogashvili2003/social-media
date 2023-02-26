import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "module-alias/register";
// Routes
import AuthRoutes from "@/routes/auth/Auth";
import UserRoutes from "@/routes/user/index";

const app: Express = express();

// CONFIGURATIONS
const corsOptions: CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
dotenv.config();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// CONSTANTS
const PORT = process.env.PORT || 9000;
const DB_URL = process.env.DB_URL as string;

// Requests
app.use("/api", AuthRoutes);
app.use("/api/user", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Database Connection
mongoose.connect(DB_URL, () => {
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
});
