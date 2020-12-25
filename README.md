[![NPM Version](https://badgen.net/npm/v/rollup-plugin-minion?color=red&icon=npm&label=version)](https://npmjs.com/package/rollup-plugin-minion)

# rollup-plugin-minion

Integrate [Minion](https://github.com/lamualfa/minion) with Rollup.

# Usage

**rollup.config.js**

```js
import minion from 'rollup-plugin-minion'

export default {
  plugins: [
    ...otherPlugins,
    minion(options)
  ]
}
```
Put the plugin at the last of the other plugins.

# Options

See [Minion JS Options](https://github.com/lamualfa/minion#options) for more informations.