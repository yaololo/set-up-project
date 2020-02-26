import { route } from "../../lib/router";
import signupController from "./signup-controller";
import loginController from "./login-controller";
import { verifyJWT } from "../../middleware/jwt-middleware";
import getProfileController from "./get-profile-controller";

route.post("/user/signup", signupController);
route.post("/user/login", loginController);
route.get("/user/profile", verifyJWT, getProfileController);
route.use("/user/*", (req, res) =>
  res.status(404).json({ message: "Invalid operation" })
);

export default route;
