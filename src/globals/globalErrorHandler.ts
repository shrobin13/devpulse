import { type NextFunction, type Request, type Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error!";

  if (err.code === "23505") {
    statusCode = 400;

    if (err.detail && err.detail.includes("email")) {
      message = "Email already exists! Please use a different email.";
    } else {
      message = "Duplicate value violates unique constraint.";
    }
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};

export default globalErrorHandler;
