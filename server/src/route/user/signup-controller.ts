import User from "../../schemas/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { checkRequiredEnvironment } from "../../config";

checkRequiredEnvironment(["PRIVATE_KEY"]);

const signupController = async function(req: Request, res: Response) {
  let password = req.body.password;
  if (typeof password !== "string") {
    return res.status(401).json({
      error: { type: "Validation Error", msg: "password must be a string" }
    });
  }

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
    console.log(e);
    // let formattedError = formatDbError(error);
    return res.status(401).json({ error: e });
  }
};

export default signupController;
