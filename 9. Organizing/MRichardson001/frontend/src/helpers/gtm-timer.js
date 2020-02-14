import React from "react";
import { canUseDOM } from "../helpers/utils";

const GtmTimer = (dataLayerObject, timerLength) => {
  const timerRef = React.useRef();
  
  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (canUseDOM) {
        window.dataLayer.push(dataLayerObject)
      }
    }, timerLength)
    
    return () => {
      clearTimeout(timerRef.current);
    }
  }, [timerRef]);
}

export default GtmTimer;
