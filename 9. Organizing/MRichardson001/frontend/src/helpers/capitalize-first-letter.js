const CapitalizeFirsts = (string) => {
  if (!string){
    return null;
  }
  const wordArray = string.split(/[ -]+/) || [];
  const newArray = [];
  wordArray.forEach(word => {
    newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });


  return newArray.join(' ');
};

export default CapitalizeFirsts;
