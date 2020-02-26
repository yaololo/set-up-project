import { Request, Response } from "express";

const getProfileController = async (req: Request, res: Response) => {
  const { email } = res.locals.userInfo;
  return res.status(200).json({ email });
};
export default getProfileController;
