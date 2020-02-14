export const dropdownStyles = {
  placeholder: () => ({
    color: "black",
    paddingLeft: "5px",
    fontFamily: '"Monotype madera", sans-serif',
    fontSize: "16px"
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.menuIsOpen ? "none !important" : null,
    height: "75px",
    width: "350px",
    border: "1px solid #333",
    // borderColor: state.menuIsOpen ? '#4c698f' : null,
    borderRadius: "2px 2px 0 0",
    fontFamily: '"Monotype madera", sans-serif',
    fontSize: "16px"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  indicatorsContainer: () => ({
    // color: 'rgb(76, 105, 143)',
    width: "15%",
    height: "100%",
    backgroundColor: "#ecd925",
    borderRadius: "0 2px 0 0",
    display: "flex",
    alignItems: "center"
  }),
  dropdownIndicator: () => ({
    color: "black",
    width: "100%",
    textAlign: "center",
    backgroundColor:"#ecd925"
  }),
  singleValue: provided => ({
    ...provided,
    transform: "translateY(-50%)",
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
