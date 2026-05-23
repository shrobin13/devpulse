import express from "express";
import { authRoute } from "./modules/auth/auth.route";
import globalErrorHandler from "./globals/globalErrorHandler";
import cookieParser from "cookie-parser";
const app = express();

app.use([express.json(), cookieParser()]);

app.use("/api/auth", authRoute);

app.use(globalErrorHandler);
export default app;
