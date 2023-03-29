export default function getStudentIdsSum(params) {
  let sum = 0;
  // eslint-disable-next-line no-return-assign
  params.map((item) => sum += item.id);
  return sum;
}
