import { canUseDOM } from "./utils";

export default props => {
  if (canUseDOM) {
    localStorage.removeItem("referralPage");
  }
  return props.children;
}
