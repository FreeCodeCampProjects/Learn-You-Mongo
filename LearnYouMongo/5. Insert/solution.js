/*
    "You should connect to the database named learnyoumongo and insert
    a document into the docs collection.

    The document should be a json document with the following properties:

        * `firstName`
        * `lastName`

    firstName will be passed as the first argument to the lesson.
    lastName will be passed as the second argument to the lesson.

    Use console.log to print out the object used to create the document."
*/

var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if (err) throw err;
    
    var collection = db.collection('docs');
    var firstName = process.argv[2]
    var lastName = process.argv[3]
    
    var jsonDoc = {
        firstName: firstName,
        lastName: lastName
    };
    
    collection.insert(jsonDoc, function(err, data) {
        if (err) throw err;
        console.log(JSON.stringify(jsonDoc));
        db.close();
    });
});

/*
    Save and 'learnyoumongo verify solution.js' the above code.
*/