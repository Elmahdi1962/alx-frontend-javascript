export default function cleanSet(set, startString) {
  const len = startString.length;
  const selectedWords = [];
  if (startString === '') return '';

  for (const e of set) {
    if (e.startsWith(startString)) {
      const t = e.substring(len);
      selectedWords.push(t);
    }
  }
  return selectedWords.join('-');
}
