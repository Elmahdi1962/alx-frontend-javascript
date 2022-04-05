export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const data = mathFunction();
    queue.push(data);
    queue.push('Guardrail was processed');
    return queue;
  } catch (err) {
    queue.push(err.message);
    queue.push('Guardrail was processed');
    return queue;
  }
}
