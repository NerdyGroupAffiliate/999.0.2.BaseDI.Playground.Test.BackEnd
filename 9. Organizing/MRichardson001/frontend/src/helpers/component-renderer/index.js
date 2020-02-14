import React, { Component } from "react";
import get from "lodash/get";
import styles from './style.module.css';

const asyncComponent = importComponent => {
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
        console.log('=== Component Not Found ===');
      }
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export const ComponentRenderer = props => {
  const component = get(props, "match.params.component");

  const Component = asyncComponent(() =>
    import(`../../controllers/${component}Controller`)
  );

  if (!Component) {
    return <div>Component not found</div>;
  }
  return (
    <div className={styles.container}>
      <Component />
    </div>
  );
};

export default ComponentRenderer;