import { observable, action } from "mobx";
import { IFormValues } from "interface/login";
import { ajax } from "lib/axios";
import { IUserProfile } from "interface/user";
import { ICustomizedError } from "interface/axios";

class UserStore {
  @observable userProfile: IUserProfile | null = null;

  isLogin = () => this.userProfile;

  login = async (payload: IFormValues) => {
    try {
      const response = await ajax.post<IUserProfile>("/user/login", payload);
      this.setUserProfile(response.data);
      return response;
    } catch (e) {
      return e as ICustomizedError;
    }
  };

  @action setUserProfile = (profile: IUserProfile | null) => {
    this.userProfile = profile;
  };
}

const userStore = new UserStore();

export default userStore;
