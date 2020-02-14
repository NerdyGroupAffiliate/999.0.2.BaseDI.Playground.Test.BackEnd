export const CheckPasswordCriteria = (type, password) => {
  if (!password) {
    return null
  }

  let result = null;
  switch (type) {
    case "upper":
      result = /[A-Z]/.test(password);
      break;
    case "lower":
      result = /[a-z]/.test(password);
      break;
    case "number":
      result = /\d/.test(password);
      break;
    case "length":
      result = password.length > 5 ? true : false;
      break;
    case "all":
      result = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(password);
      return result ? 'complete' : 'incomplete';
    default:
      result = null;
  }

  if (result) {
    return { color: 'green'}
  } else {
    return { color: 'red'}
  }
};
