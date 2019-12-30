import { route } from "../../lib/router";
import signupController from "./signup-controller";
import loginController from "./login-controller";

route.post("/user/signup", signupController);
route.post("/user/login", loginController);

export default route;
