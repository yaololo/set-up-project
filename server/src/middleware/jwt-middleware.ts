import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.PRIVATE_KEY!);
    console.log(decoded);
    res.locals.userInfo = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: JSON.stringify(e) });
  }
};
export { verifyJWT };
