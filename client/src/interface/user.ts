import { IResponse } from "./base";

interface IUserProfile {
  email: string;
}

type IProfileResponse = IResponse<IUserProfile>;

export { IUserProfile, IProfileResponse };
