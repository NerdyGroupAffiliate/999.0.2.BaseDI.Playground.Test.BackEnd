import React, { Component } from "react";
import styles from "./styles.module.css";
class Checkbox extends Component {
  toggleCheckboxChange = () => {
    const { onChange, isChecked } = this.props;
    onChange(!isChecked);
  };

  render() {
    const { label, isChecked, color = "#000" } = this.props;

    return (
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          <input
            className={[
              styles.checkboxInput,
              isChecked ? styles.checkboxChecked : ""
            ].join(" ")}
            style={{
              backgroundColor: isChecked ? color : "#FFFFFF"
            }}
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
