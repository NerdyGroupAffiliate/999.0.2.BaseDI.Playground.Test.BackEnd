import get from "lodash/get";

export const getPreviewData = (props) => get(props, 'history.location.state.preview');