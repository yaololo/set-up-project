import User from "../../schemas/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const signupController = async function(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const errMsg = "Email already exist.";
    const user = await User.findOne({ email });
    if (!!user) {
      return res.status(401).json({ message: errMsg });
    }

    const newUser = new User();
    newUser.email = email;
    newUser.name = password;
    newUser.setHashedPassword(password);

    await newUser.save();
    const userInfo = newUser.toJson();
    const token = jwt.sign(userInfo, process.env.PRIVATE_KEY!);

    // set token to cookie
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    return res.status(200).json(userInfo);
  } catch (e) {
    return res.status(401).json({ message: e });
  }
};

export default signupController;
