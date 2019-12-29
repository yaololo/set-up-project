import { routes } from "lib/router";
routes.use("/api", require("./api"));

export { routes };
