import express from "express";
import { authRoute } from "./modules/auth/auth.route";
import globalErrorHandler from "./globals/globalErrorHandler";
import cookieParser from "cookie-parser";
import { issuesRoute } from "./modules/issues/issues.route";
const app = express();

app.use([express.json(), cookieParser()]);

app.use("/api/auth", authRoute);
app.use("/api/issues", issuesRoute);

app.use(globalErrorHandler);
export default app;
