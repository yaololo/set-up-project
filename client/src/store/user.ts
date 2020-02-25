import { observable, action } from "mobx";
import { IFormValues } from "interface/login";
import { ajax } from "lib/axios";
import { ICustomizedError } from "interface/axios";
import { IUserProfile, IProfileResponse } from "interface/user";

class UserStore {
  @observable userProfile: IUserProfile | null = null;

  getProfile = async () => {
    try {
      const {
        data: { data }
      } = await ajax.get<IProfileResponse>("/user/profile");
      this.setUserProfile(data);
    } catch (e) {
      console.log(e);
      return false;
    }
  };

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

  @action setUserProfile = (profile: IUserProfile) => {
    this.userProfile = profile;
  };
}

const userStore = new UserStore();

export default userStore;
