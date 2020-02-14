import React from "react";
import get from "lodash/get";
import PropertyEarlyPhaseView from "../../components/PropertyEarlyPhaseView";

function PropertyEarlyPhase(props) {
  const development_start_date = get(props, "page.development_start_date");
  const prelease_start_date = get(props, "page.pre-lease_start_date");
  const move_in_date = get(props, "page.move_in_date");
  return (
    <PropertyEarlyPhaseView {...props}>
      <phase1-label />
      {development_start_date && (
        <phase1-date>{development_start_date}</phase1-date>
      )}
      <phase2-label />
      {prelease_start_date && <phase2-date>{prelease_start_date}</phase2-date>}
      <phase3-label />
      {move_in_date && <phase3-date>{move_in_date}</phase3-date>}
    </PropertyEarlyPhaseView>
  );
}
export default PropertyEarlyPhase;
