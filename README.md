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

Then you gain access to all current endpoints of the API! All but initialization require a callback function and some also require either `role` or `champion_id`, along with an optional object with ...options. These options are passed as query string params and are `page`, `limit`, `elo`, `sort` and `champData`. For more details on these parameters, please refer to the Champion.GG API documentation.

The methods are:

Method | Parameters |
------ | ---------- |
`.init`| `api_key`  |
`.statistics.overall` | `options`, `cb` |
`.statistics.general` | `options`, `cb` |
`.champions.all` | `options`, `callback` |
`.champions.specific` | `champId`, `options`, `callback` |
`.champions.specificRole` | `champId`, `role`, `options`, `callback` |
`.champions.specificMatchup` | `champ1Id`, `champ2Id`, `role`, `options`, `callback` |


# tests
 ```
 npm test
 ```

## contributing
Feel free to contribute, let's just try to keep it readable :)
