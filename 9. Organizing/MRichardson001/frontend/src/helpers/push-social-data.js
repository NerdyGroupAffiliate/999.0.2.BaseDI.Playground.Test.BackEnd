import { canUseDOM } from "./utils";

const pushSocialData = (dataText, dataBlogTitle) => {
    if (!!canUseDOM) {
      window.dataLayer.push({shareIcon: dataText, blogTitle: dataBlogTitle, event: "blogSocialShare" })
    }
}

export default pushSocialData;