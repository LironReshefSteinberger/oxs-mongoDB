var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://oxs:oxs123@ds155352.mlab.com:55352/oxs';
    return MongoClient.connect(url)
        .then(client => {
            // console.log('Connected to MongoDB');
            client.on('close', ()=>{
                // console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
