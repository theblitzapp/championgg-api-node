# Node.js Client for the Champion.GG API

[![NPM](https://nodei.co/npm/@solomid/node-gg.png?mini=true)](https://www.npmjs.com/package/@solomid/node-gg)

[![Build Status via Travis CI](https://travis-ci.org/solomidnet/championgg-api-node.svg?branch=master)](https://travis-ci.org/solomidnet/championgg-api-node)

The official Champion.GG API Node.js Client.

# installation
  ```
  npm i @solomid/node-gg
  ```
  
  If you really need an ES5 version:
  ```
  npm i @solomid/node-gg@1.1.0
  ```

# usage
First, instantiate the wrapper with your api key
  ```
  const GG = require('node-gg');
  const gg = GG.init('YOUR_KEY');
  ```

Then you gain access to all current endpoints of the API! All but initialization require a callback function and some also require either `role` or `champion_name`, along with an optional object with ...options. These options are passed as query string params and are `page` and `limit`.

The methods are:

Method | Parameters |
------ | ---------- |
`.init`| `api_key`  |
`.statistics.all` | `cb` |
`.statistics.role.specific.improvement.most` | `role`, `options`, `callback` |
`.statistics.role.specific.improvement.least` | `role`, `options`, `callback` |
`.statistics.role.specific.winning.most` | `role`, `options`, `callback` |
`.statistics.role.specific.winning.least` | `role`, `options`, `callback` |
`.statistics.role.specific.performance.best` | `role`, `options`, `callback` |
`.statistics.role.specific.performance.least` | `role`, `options`, `callback` |
`.statistics.champs.specific` | `name`, `callback` |
`.statistics.champs.general.winning.most` | `options`, `callback` |
`.statistics.champs.general.winning.least` | `options`, `callback` |
`.statistics.champs.general.played.most` | `options`, `callback` |
`.statistics.champs.general.played.least` | `options`, `callback` |
`.statistics.champs.general.banned.most` | `options`, `callback` |
`.statistics.champs.general.rated.best` | `options`, `callback` |
`.statistics.champs.general.rated.worst` | `options`, `callback` |
`.champions.all` | `callback` |
`.champions.data.specific`| `name`, `callback` |
`.champions.data.general`| `name`, `callback` |
`.champions.skills.info`| `name`, `callback` |
`.champions.skills.order.popular`| `name`, `callback` |
`.champions.skills.order.winning`| `name`, `callback` |
`.champions.items.starting.popular`| `name`, `callback` |
`.champions.items.starting.winning`| `name`, `callback` |
`.champions.items.finished.winning`| `name`, `callback` |
`.champions.items.finished.popular`| `name`, `callback` |
`.champions.runes.winning`| `name`, `callback` |
`.champions.runes.popular`| `name`, `callback` |
`.champions.matchups.general`| `name`, `callback` |
`.champions.matchups.specific`| `name`, `enemyName`, `callback` |


# tests
 ```
 npm test
 ```

## contributing
Feel free to contribute, let's just try to keep it readable :)
