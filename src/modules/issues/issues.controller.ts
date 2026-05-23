import type { Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import properties from "../../config/properties";
import { issuesService } from "./issues.service";
import sendResponse from "../../utility/sendResponse";

const createIssues = async (req: Request, res: Response) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization as string,
      properties.accessSecret as string,
    ) as JwtPayload;

    const createdIssue = await issuesService.createIssuesHandler(
      decoded.id,
      req.body,
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Issue created successfully",
      data: createdIssue,
    });
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
export const issuesController = { createIssues };
