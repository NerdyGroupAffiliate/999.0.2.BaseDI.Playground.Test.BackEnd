import React from "react";
import "./index.css";

function Spinner(props) {
  const className = `spinner-${props.color || "teal"}`;
  return (
    <span>
      <div
        className={[
          "lds-dual-ring",
          className,
          props.containerClass || ""
        ].join(" ")}
        style={props.style || {}}
      />
      {props.propertyColor ? (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .lds-dual-ring:after {
            border: 5px solid ${props.propertyColor} !important;
            border-color: ${props.propertyColor} transparent ${
              props.propertyColor
            } transparent !important;
          }
        `
          }}
        />
      ) : null}
    </span>
  );
}

export default Spinner;
