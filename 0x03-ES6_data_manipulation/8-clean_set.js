export default function cleanSet(set, startString) {
  const len = startString.length;
  const selectedWords = [];
  let txt = '';

  if (startString && typeof (startString) === 'string') {
    for (const elem of set) {
      if (elem && elem.startsWith(startString)) {
        selectedWords.push(elem.slice(len));
      }
    }
    txt = selectedWords.join('-');
  }
  return txt;
}
