export default function cleanSet(set, startString) {
  const len = startString.length;
  const selectedWords = [];
  let txt = '';
  if (startString && typeof (startString) === 'string') {
    for (const v of set) {
      if (v && v.startsWith(startString)) {
        selectedWords.push(v.slice(len));
      }
    }
  }
  txt = selectedWords.join('-');
  return txt;
}
