"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _minionJs = _interopRequireDefault(require("minion-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(options) {
  const handler = code => {
    const minion = (0, _minionJs.default)(options);
    if (minion) return minion(code);
    return null;
  };

  return {
    name: 'minion',
    renderChunk: handler,
    transform: handler
  };
}