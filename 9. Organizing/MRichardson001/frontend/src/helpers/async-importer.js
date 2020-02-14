import React, { Component } from "react";

const asyncImporter = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      try {
        const cmp = await importComponent();
        this.setState({ component: cmp.default });
      } catch (e) {
        console.log(e);
        console.log("=== Component Not Found ===");
      }
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncImporter;
