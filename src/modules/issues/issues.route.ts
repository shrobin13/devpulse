import { Router } from "express";
import { issuesController } from "./issues.controller";
import auth from "../../middleware/auth";
import { UserRole } from "../../enums-types/enums";
import updatePermission from "../../middleware/update";

const router = Router();

router.post(
  "/",
  auth(UserRole.contributor, UserRole.maintainer),
  issuesController.createIssues,
);

router.get("/", issuesController.getAllIssues);

router.get("/:id", issuesController.getIssueById);

router.patch("/:id", updatePermission, issuesController.updateIssueById);

router.delete(
  "/:id",
  auth(UserRole.maintainer),
  issuesController.deleteIssueById,
);

export const issuesRoute = router;
