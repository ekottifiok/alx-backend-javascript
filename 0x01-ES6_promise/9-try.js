export default function guardrail(f) {
  let ret; try {
    ret = f();
  } catch (err) {
    ret = String(err);
  }
  return [
    ret,
    'Guardrail was processed',
  ];
}
