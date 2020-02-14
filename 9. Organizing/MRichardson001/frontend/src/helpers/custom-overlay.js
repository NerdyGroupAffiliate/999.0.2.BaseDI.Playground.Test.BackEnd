import React from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';
import { OverlayView } from '@react-google-maps/api';
import OVERLAY_VIEW from '../config';

export default class CustomOverlayView extends OverlayView {
  // Override draw function to catch errors with map panes being undefined to prevent console errors
  draw() {
    const { mapPaneName } = this.props;
    invariant(
      !!mapPaneName,
      `OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s`,
      mapPaneName
    );
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
    const mapPanes = this.state[OVERLAY_VIEW].getPanes();
    if (mapPanes && this.containerElement) { // <-- Add conditional to ensure panes and container exist before drawing
      mapPanes[mapPaneName].appendChild(this.containerElement);

      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        React.Children.only(this.props.children),
        this.containerElement,
        this.onPositionElement
      );
    }
  }
  onRemove() {
    if (this.containerElement) {
      return super.onRemove();
    }
  }
}