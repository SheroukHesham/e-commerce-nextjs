import Cookies, { CookieSetOptions } from "universal-cookie";
import { ICart } from "../lib/features/cartSlice";

const cookies = new Cookies(null, { path: "/" });

class CookieService {
  get(name: string) {
    return cookies.get(name);
  }
  set(name: string, value: string | ICart[], options?: CookieSetOptions) {
    return cookies.set(name, value, options);
  }
  remove(name: string) {
    return cookies.remove(name);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CookieService();
