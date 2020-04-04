import { observable, action } from "mobx";
import { IFormValues } from "interface/login";
import { ajax } from "lib/axios";
import { IUserProfile } from "interface/user";
import { ICustomizedError } from "interface/axios";
import { IFormValues as ISignUpFrom } from "interface/signup";

class UserStore {
  @observable userProfile: IUserProfile | null = null;

  isProfileSet = () => !!this.userProfile;

  login = (payload: IFormValues) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await ajax.post<IUserProfile>("/user/login", payload);
        this.setUserProfile(response.data);
        return resolve(response);
      } catch (e) {
        return reject(e as ICustomizedError);
      }
    });
  };

  getProfile = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await ajax.get<IUserProfile>("/user/profile");
        this.setUserProfile(response.data);
        return resolve(response);
      } catch (e) {
        return reject(e as ICustomizedError);
      }
    });
  };

  signup = (payload: ISignUpFrom) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await ajax.post<IUserProfile>("/user/signup", payload);
        const email = response.data;
        this.setUserProfile(email);

        return resolve(response);
      } catch (e) {
        return reject(e as ICustomizedError);
      }
    });
  };

  @action setUserProfile = (profile: IUserProfile | null) => {
    this.userProfile = profile;
  };
}

const userStore = new UserStore();

export default userStore;
