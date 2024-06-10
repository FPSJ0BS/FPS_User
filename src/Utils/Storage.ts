import { StorageConst } from "@Const/StorageConst";

class Storage {
  saveUserToken(token: string) {
    window.localStorage.setItem(StorageConst.Fps_Token, token || "");
  }
  getUserToken() {
    const token: string =
      window.localStorage.getItem(StorageConst.Fps_Token) || "";
    return token;
  }
  deleteUserToken() {
    window.localStorage.removeItem(StorageConst.Fps_Token);
  }
  saveLinkedinToken(data: any) {
    window.localStorage.setItem(StorageConst.Linkedin, data || "");
  }
  getLinkedinToken() {
    const token: any = window.localStorage.getItem(StorageConst.Linkedin) || "";

    return token;
  }
}
const StorageInstance = new Storage();
export default StorageInstance;
