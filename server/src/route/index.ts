import { route } from "../lib/router";
import { default as userRoutes } from "./user/user";

route.use("/api", userRoutes);

export default route;
