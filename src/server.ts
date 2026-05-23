import app from "./app";
import properties from "./config/properties";
import { initDb } from "./db/init";

const main = () => {
  initDb();
  app.listen(properties.port, () => {
    console.log(`App is listening on port: ${properties.port}`);
  });
};

main();
