# babel-preset-stage-0-promises

Modified stage-0 preset with babel-plugin-transform-async-to-generator

## Install

`npm install babel-preset-stage-0-promises`

## Usage

**.babelrc**

```json
{
  "presets": ["stage-0-promises"]
}
```

**CLI**

```bash
$ babel index.js --presets stage-0-promises
```

**Node**

```js
require('babel-core').transform(code, {
  presets: ['stage-0-promises']
});
```

## License

MIT