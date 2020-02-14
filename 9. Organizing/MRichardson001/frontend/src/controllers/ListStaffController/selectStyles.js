export const dropdownStyles = {
  placeholder: () => ({
    color: "black",
    paddingLeft: "5px",
    fontFamily: '"Monotype madera", sans-serif',
    fontSize: "24px"
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    boxShadow: state.menuIsOpen ? "none !important" : null,
    height: "auto",
    width: "100%",
    border: state.isFocused ? "2px solid rgb(77, 144, 254)" : "none",
    display: "block",
    fontFamily: '"Monotype madera", sans-serif',
    fontSize: "16px"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  indicatorsContainer: () => ({
    width: "20px",
    backgroundColor: "#ecd925",
    borderRadius: "0 2px 0 0",
    display: "block",
    alignItems: "center",
    position: "absolute",
    right: "5%",
    top: "20%"
  }),
  dropdownIndicator: () => ({
    color: "black",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ecd925",
    display: "block"
  }),
  singleValue: provided => ({
    ...provided,
    transform: "translateY(-50%)",
    top: "45%",
    fontSize: "24px",
    overflow: "visible"
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border: "1px solid #333",
    borderTop: "none",
    borderRadius: "0px",
    width: "100%",
    marginTop: "0",
    overflow: "scroll",
    position: "absolute",
    left: "0",
    msOverflowStyle: "-ms-autohiding-scrollbar",
  }),
  menuList: provided => ({
    ...provided,
    paddingTop: "0px"
  }),
  option: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
      backgroundColor:
        state.isFocused || (!state.data.value && !state.data.uid)
          ? "white"
          : "transparent",
      borderBottom: "1px solid #333",
      color:
        state.isFocused && (!state.data.value && !state.data.uid)
          ? "#444"
          : "black",
      fontFamily: '"Monotype madera", sans-serif',
      fontSize: "16px",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: !!state.data.value ? "50px" : "10px",
      textAlign: "left",
      transition: "all 125ms",
      borderLeft:
        state.isFocused && !(!state.data.value && !state.data.uid)
          ? "8px solid #ecd925"
          : null,
      position:
        !state.data.value && !state.data.uid ? "sticky" : "inline-block",
      top: 0,
      fontWeight:
        (!state.data.value && !state.data.uid) || state.isFocused
          ? "500"
          : "400"
    };
  }
};
