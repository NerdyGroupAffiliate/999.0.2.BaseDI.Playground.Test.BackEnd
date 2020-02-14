export const formatDollar = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

export const getQueryVariable = (querystring, variable) => {
  const query = querystring;
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (
      decodeURIComponent(pair[0]) === variable ||
      decodeURIComponent(pair[0]) === `?${variable}`
    ) {
      return decodeURIComponent(pair[1]);
    }
  }
  return undefined;
};

export const formatGQLError = (
  error,
  fallbackText = "There was an error, please try again."
) => {
  let errMsg = fallbackText;
  if (error && error.message) {
    errMsg = error.message.replace(/GraphQL error: |Error: /gi, "");
    errMsg = errMsg.replace(/.,\b/g, "..,").split(".,");
    errMsg = errMsg.map(err => {
        let errCode = err.split(" - ");
        if (errCode && errCode[1]) {
          errCode = errCode[1].replace(/ \([^)]*\)/g, "")
        }
        return errCode;
    })
  }
  return errMsg;
};

export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const doNotTranslate = "notranslate";
