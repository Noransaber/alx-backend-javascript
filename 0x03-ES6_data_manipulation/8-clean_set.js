const cleanSet = (set, startString) => {
  if (startString) {
    const array = [...set];

    const filteredItems = array.filter((item) => item.startsWith(startString));

    const finalArray = filteredItems.map((item) => item.slice(startString.length));

    return finalArray.join('-');
  }
  return '';
};
export default cleanSet;
