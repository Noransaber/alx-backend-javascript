export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return newArray;
}
