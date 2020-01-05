import { observable } from "mobx";
import { IFormValues } from "interface/login";
import { ajax } from "lib/axios";
import { ICustomizedError } from "interface/axios";
class UserStore {
  // @observable userProfile = {
  //   email: '',
  // }

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
}

const userStore = new UserStore();

export default userStore;
