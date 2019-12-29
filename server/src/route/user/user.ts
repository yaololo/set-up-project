import { route } from "../../lib/router";

route.post("/user/signup", () => console.log("signup"));
route.post("/user/login", () => console.log("login"));

export default route;
