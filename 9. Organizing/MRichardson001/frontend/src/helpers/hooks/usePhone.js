import { useState, useEffect } from "react";
import getDniPhone from "../get-dni-phone";
import queryString from "query-string";
import { setItem, getItem, getItemString } from "../../helpers/cookies";

function usePhone(initialPhone, entrataId, props) {
  let switchCode;
  let referralSite;
  const { switch_code } = queryString.parse(props.location.search);
  if (switch_code) {
    setItem("switch_code", switch_code);
  }
  referralSite = getItemString("referralSite");
  switchCode = getItem("switch_code");

  const [phone, setPhone] = useState(initialPhone);
  const [loaded, setLoaded] = useState(false);
  const [href, setHref] = useState(`tel:${initialPhone}`);

  useEffect(() => {
    function handlePhoneChange(phn) {
      if (!!phn) {
        setPhone(phn);
        setHref(`tel:${phn}`);
      }
    }
    if (!!entrataId && (!!switchCode || !!referralSite)  && !loaded) {
      setLoaded(true);
      getDniPhone(entrataId, switchCode, referralSite).then(handlePhoneChange);
    }
  });

  return [phone, href];
}

export default usePhone;
