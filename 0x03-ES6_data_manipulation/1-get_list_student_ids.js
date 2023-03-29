export default function getListStudentIds(params) {
  if (typeof params !== 'object') return {};
  const id = [];
  params.map((_item) => id.push(_item.id));
  return id;
}
