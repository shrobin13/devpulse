import type { IssueType, StatusType } from "../../enums-types/enums";

export interface IIssuePayload {
  title?: string;
  description?: string;
  type?: IssueType;
  status?: StatusType;
}
