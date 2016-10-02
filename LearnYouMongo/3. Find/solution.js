/*
    "Use the parrots collection to find all documents where age
    is greater than the first argument passed to your script."
*/

var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err,db){
    console.log(err ? err : 'Successfully connected to database');
    
    var parrots = db.collection('parrots');
    var arg = parseInt(process.argv[2]);
    var result = parrots.find({
        age:{
            $gt:arg
        }
    });

    result.toArray(function(err,docs){
        if(err) console.log(err);
        console.log(docs);
        db.close();
    });
});

/*
    Save and 'learnyoumongo verify solution.js' the above code.
*/