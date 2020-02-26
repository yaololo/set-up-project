import User from "../../schemas/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, res: Response) => {
  const { password, email } = req.body;

  try {
    const errMsg = "Username or password is wrong!";
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: errMsg });
    }

    const isValidPassword = user.validPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: errMsg });
    }

    const userInfo = user.toJson();
    const token = jwt.sign(userInfo, process.env.PRIVATE_KEY!);
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    return res.status(200).json(userInfo);
  } catch (e) {
    return res.status(401).json({ message: JSON.stringify(e) });
  }
};
export default loginController;
