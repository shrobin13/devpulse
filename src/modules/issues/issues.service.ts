import { pool } from "../../db/init";
import type { IIssuePayload } from "./issues.interface";

const createIssuesHandler = async (id: number, issuePayload: IIssuePayload) => {
  const { title, description, type } = issuePayload;

  const createdIssue = await pool.query(
    `INSERT INTO issues(title, description, type, reporter_id) values($1, $2, $3, $4) RETURNING *`,
    [title, description, type, id],
  );
  console.log(createdIssue.rows[0]);
  return createdIssue.rows[0];
};

export const issuesService = {
  createIssuesHandler,
};
