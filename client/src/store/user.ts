import { observable, action } from "mobx";
import { IFormValues } from "interface/login";
import { ajax } from "lib/axios";
import { IUserProfile } from "interface/user";

class UserStore {
  @observable userProfile: IUserProfile | null = null;

  isLogin = () => this.userProfile;

  login = async (payload: IFormValues) => {
    try {
      await ajax.post("/user/login", payload);
      return true;
    } catch (e) {
      console.log(e);
      return false;
      // return e as ICustomizedError;
    }
  };

  @action setUserProfile = (profile: IUserProfile | null) => {
    this.userProfile = profile;
  };
}

const userStore = new UserStore();

export default userStore;
