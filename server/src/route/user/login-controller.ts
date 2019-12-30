import User from "../../schemas/user";
import { Request, Response } from "express";

const loginController = async (req: Request, res: Response) => {
  let password = req.body.password;
  if (typeof password !== "string") {
    return res.status(401).json({
      error: { type: "Validation Error", msg: "password must be a string" }
    });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ error: { type: "Validation Error", msg: "Wrong email" } });
    }

    const isValidPassword = user.validPassword(req.body.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ error: { type: "Validation Error", msg: "Wrong password" } });
    }

    return res
      .status(200)
      .json({ success: { msg: "Login successful", userInfo: user.toJson() } });
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: e });
  }
};
export default loginController;
