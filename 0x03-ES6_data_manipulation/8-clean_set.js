export default function cleanSet(set, startString) {
  const len = startString.length;
  const selectedWords = [];

  if (startString) {
    for (const v of set) {
      if (v.startsWith(startString)) {
        selectedWords.push(v.slice(len));
      }
    }
  }
  return selectedWords.join('-');
}
