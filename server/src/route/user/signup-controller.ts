import User from "../../schemas/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const signupController = async function(req: Request, res: Response) {
  let password = req.body.password;
  let user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  user.setHashedPassword(password);

  try {
    await user.save();
    const userInfo = user.toJSON();
    const token = jwt.sign(userInfo, process.env.PRIVATE_KEY!);

    // set token to cookie
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    return res.send({ userInfo });
  } catch (e) {
    return res.status(401).json({ message: e });
  }
};

export default signupController;
