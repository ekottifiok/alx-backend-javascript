export default function getStudentsByLocation(array, state) {
  const ret = [];
  // eslint-disable-next-line array-callback-return
  array.map((item) => { if (item.location === state) ret.push(item) })
  return ret;
}
