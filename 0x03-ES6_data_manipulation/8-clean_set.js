export default function cleanSet(set, startString) {
  const len = startString.length;
  if (startString === '') return '';
  let res = '';
  for (const e of [...set]) {
    if (e.startsWith(startString)) {
      const t = e.substring(len);
      if (res === '') {
        res += t;
      } else {
        res += `-${t}`;
      }
    }
  }
  return res;
}
