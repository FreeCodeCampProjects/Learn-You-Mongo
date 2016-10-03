/*
    "Use the parrots collection from the database named learnyoumongo to
    find all documents where age is greater than the first argument
    passed to your script."
*/

var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err,db){
    if (err) throw err;
    
    var parrots = db.collection('parrots');
    var arg = parseInt(process.argv[2]);
    var result = parrots.find({
        age:{
            $gt: arg
        }
    }, {
        name: 1,
        age: 1,
        _id: 0
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