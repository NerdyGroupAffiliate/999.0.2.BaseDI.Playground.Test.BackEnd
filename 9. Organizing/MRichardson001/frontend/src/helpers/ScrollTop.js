import React from "react";
import { withRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
class ScrollToTop extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
