# fe

> nembv stack

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# nembv
Node Express Mongo Bootstrap Vue Stack

## config file definition
**cfg/cfg.js**
```javascript
module.exports = {
    db: {
        url: 'mongodb://nembv:nembv@cluster0-shard-00-00-iwlka.mongodb.net:27017,cluster0-shard-00-01-iwlka.mongodb.net:27017,cluster0-shard-00-02-iwlka.mongodb.net:27017/nembv?useNewUrlParser=true&ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    },
    web: {
        // 추후 http, https, port 등
    },
};
```