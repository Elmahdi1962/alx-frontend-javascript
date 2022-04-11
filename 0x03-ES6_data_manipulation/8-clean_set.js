export default function cleanSet(set, startString) {
  const len = startString.length;
  const selectedWords = [];
  if (startString && typeof (startString) === 'string') {
    for (const v of set) {
      if (v && v.startsWith(startString)) {
        selectedWords.push(v.slice(len));
      }
    }
  }
  return selectedWords.join('-');
}
