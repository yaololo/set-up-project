import User from "../../schemas/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, res: Response) => {
  const password = req.body.password;
  if (typeof password !== "string") {
    return res.status(401).json({
      error: { type: "Validation Error", msg: "password must be a string" }
    });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
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

    const userInfo = user.toJson();
    const token = jwt.sign(userInfo, process.env.PRIVATE_KEY!);
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    return res
      .status(200)
      .json({ success: { msg: "Login successful", userInfo } });
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: e });
  }
};
export default loginController;
