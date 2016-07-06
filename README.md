# championgg-api-node
A node module wrapper for the Champion.GG API

# installation
  ```
  npm i @solomid/node-gg
  ```

# usage
First, instantiate the wrapper with your api key
  ```
  var GG = require('node-gg');
  var gg = GG.init('YOUR_KEY');
  ```

Then you gain access to all current endpoints of the API! All but initialization require a callback function and some also require either `role` or `champion_name`, along with an optional object with ...options. These options are passed as query string params and are `page` and `limit`

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

## Release History
  * 1.0.0 Initial release
