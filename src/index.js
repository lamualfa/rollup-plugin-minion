import createMinion from 'minion-js';

export default function init(options) {
  const handler = (code) => {
    const minion = createMinion(options);
    if (minion) return minion(code);
    return null;
  };

  return {
    name: 'minion',
    renderChunk: handler,
    transform: handler,
  };
}
