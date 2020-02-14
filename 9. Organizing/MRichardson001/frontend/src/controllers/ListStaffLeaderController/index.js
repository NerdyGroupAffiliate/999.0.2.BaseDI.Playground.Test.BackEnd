import React from "react";
import ReactDOM from "react-dom";
import get from "lodash/get";
import ListStaffLeaderView from "../../components/ListStaffLeaderView";
import { doNotTranslate } from "../../helpers/utils";
import styles from "./styles.module.css";
import TextWritter from "../../helpers/text-writter/index";

class ListStaffController extends React.Component {
  gutter = 60;
  parentNode;

  componentDidMount() {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode;
    this.currentNode = React.createRef();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.selected !== this.props.selected) {
      const timer = setInterval(() => {
        if (this.currentNode && this.currentNode.current) {
          clearInterval(timer);
        }
        this.forceUpdate();
      }, 300);
    }
  }

  getPhraseStyle = () => {
    let left;
    let width;

    if (!this.currentNode || !this.currentNode.current) {
      return { left: 0, width: 0 };
    }
    const currentNodeBounds = this.currentNode.current.getBoundingClientRect();
    const parentNodeBounds = this.parentNode.getBoundingClientRect();
    if (parentNodeBounds.width < 630 && parentNodeBounds.width > 459) {
      left = parentNodeBounds.left - currentNodeBounds.left + 30;
      width = parentNodeBounds.width - 60;
    } else if (parentNodeBounds.width < 460 && currentNodeBounds.left < 80) {
      left = 0;
      width = "200%";
    } else if (parentNodeBounds.width < 460 && currentNodeBounds.left > 120) {
      left = "-100%";
      width = "200%";
    } else {
      left = parentNodeBounds.left - currentNodeBounds.left + this.gutter;
      width = parentNodeBounds.width - this.gutter * 2;
    }

    return {
      left,
      width
    };
  };

  getArrowStyle = () => {
    let left;
    if (!this.currentNode || !this.currentNode.current) {
      return { left: 0 };
    }

    const currentNodeBounds = this.currentNode.current.getBoundingClientRect();
    const parentNodeBounds = this.parentNode.getBoundingClientRect();
    const borderGutter = 60;

    if (parentNodeBounds.width < 630 && parentNodeBounds.width > 459) {
      left =
        currentNodeBounds.left -
        parentNodeBounds.left +
        currentNodeBounds.width / 2 -
        borderGutter / 2 -
        30;
    } else if (parentNodeBounds.width < 460) {
      left = currentNodeBounds.left + currentNodeBounds.width / 2 - 30;
    } else {
      left =
        currentNodeBounds.left -
        parentNodeBounds.left +
        currentNodeBounds.width / 2 -
        borderGutter / 2 -
        this.gutter;
    }
    return {
      left
    };
  };

  selectLeader = () => {
    const { leader, onSelectLeader } = this.props;
    onSelectLeader(leader);
  };

  render() {
    const { selected } = this.props;
    const image = get(this.props, "leader.data.image.url");
    const name = get(this.props, "leader.data.full_name");
    const role = get(this.props, "leader.data.position");
    const phrase = get(this.props, "leader.data.bio");
    return (
      <div className={styles.wrapper} ref={this.currentNode}>
        <button
          tabIndex={0}
          onClick={this.selectLeader}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              if (e.Handled) {
                return;
              }
              this.selectLeader();
              e.Handled = true;
            }
          }}
          className={styles.listWrapper}
        >
          <ListStaffLeaderView>
            <image src={image} alt={name} />
            <name
              className={[doNotTranslate, selected && styles.activeName, styles.name].join(" ")}
            >
              {name}
            </name>
            <role className={styles.role}>{role}</role>
          </ListStaffLeaderView>
        </button>

        {selected ? (
          <div className={styles.box} style={this.getPhraseStyle()}>
            <div className={styles.after} style={this.getArrowStyle()} />
            <div className={styles.before} style={this.getArrowStyle()} />
            <span>{phrase.map(text => TextWritter(text))}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ListStaffController;
