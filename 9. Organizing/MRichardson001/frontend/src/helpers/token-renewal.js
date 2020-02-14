import get from "lodash/get";
import { getItem, setItem, clear } from "./cookies";
import client from "./apollo-client";
import RenewTokenMutation from "../graphql/mutations/renewToken";

class RenewToken {
  constructor() {
    this._isRenewing = false;
  }

  renew = async () => {
    try {
      const tokenDate = getItem("token_date");
      const user = getItem("user");

      // Check if current token is older than 3 hours
      if (
        !!tokenDate &&
        !this._isRenewing &&
        new Date().getTime() - tokenDate >= 10800000
      ) {
        this._isRenewing = true;
        const tokenRes = await client.mutate({ mutation: RenewTokenMutation });
        const token = get(tokenRes, "data.renewToken.token");
        if (!!token) {
          setItem("user", { ...user, token });
        }
        this._isRenewing = false;
      }
    } catch (e) {
      clear();
      console.log(e);
    }
  };
}

export default new RenewToken();
