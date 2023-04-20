const {MongoClient} = require('mongodb')

URL=`mongodb://127.0.0.1:27017/Web`

const client= new MongoClient(URL)

let dbConnection;

function start(cb){
    try {
        client.connect()
        console.log('Conntected to DB')
        dbConnection = client.db();
        return cb();

    } catch (err) {
        console.log('Error connection')
        return cb(err)
    }
}

const getDB = () => dbConnection

module.exports={getDB,start};