module.exports = {
    db: {
        url: 'mongodb://nembv:nembv@cluster0-shard-00-00-iwlka.mongodb.net:27017,cluster0-shard-00-01-iwlka.mongodb.net:27017,cluster0-shard-00-02-iwlka.mongodb.net:27017/nembv?useNewUrlParser=true&ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
        // url : "mongodb://xxx.com:27170/xxx"
        //url : 'mongodb+srv://nembv:nembv@cluster0-shard-00-00-iwlka.mongodb.net:27017,cluster0-shard-00-01-iwlka.mongodb.net:27017,cluster0-shard-00-02-iwlka.mongodb.net:27017/nembv' // 3.6이상
    },    
    web: {
      // 추후 http, https, port등 
    },
};