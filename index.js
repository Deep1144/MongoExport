const mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/PMS";


function connect(options){
    if(options) {
        console.log(options.url);

    }
    mongoClient.connect(url , (err,db)=>{
        if(err) throw err;
        console.log("connected to database");
    });
}

module.exports.connect = connect;