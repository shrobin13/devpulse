import { Router } from "express";
import { issuesController } from "./issues.controller";

const router = Router();
router.post("/", issuesController.createIssues);
router.get("/", issuesController.getAllIssues);
router.get("/:id", issuesController.getIssueById);
router.patch("/:id", updatePermission(), issuesController.updateIssueById);

export const issuesRoute = router;
