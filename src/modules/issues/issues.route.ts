import { Router } from "express";
import { issuesController } from "./issues.controller";
import auth from "../../middleware/auth";
import { UserRole } from "../../enums-types/enums";

const router = Router();

router.post(
  "/",
  auth(UserRole.contributor, UserRole.maintainer),
  issuesController.createIssues,
);

router.get("/", issuesController.getAllIssues);

router.get("/:id", issuesController.getIssueById);

router.patch(
  "/:id",
  auth(UserRole.maintainer),
  issuesController.updateIssueById,
);

router.delete(
  "/:id",
  auth(UserRole.maintainer),
  issuesController.deleteIssueById,
);

export const issuesRoute = router;
