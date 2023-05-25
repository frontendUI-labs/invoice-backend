import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(3003, () => {
  console.log("starting services");
});
