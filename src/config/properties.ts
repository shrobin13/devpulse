import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const properties = {
  port: process.env.PORT,
  connectionString: process.env.DB_CONNECTION_STRING,
  accessSecret: process.env.ACCESS_SECRET,
  refreshSecret: process.env.REFRESH_SECRET,
};

export default properties;
