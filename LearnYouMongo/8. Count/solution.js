/*
    Here we will learn how to count the number of documents that
    meet certain criteria.
    
    Use the parrots collection from the database named learnyoumongo to
    count all documents where age is greater than the first argument
    passed to your script.
*/

var mongo = require('mongodb').MongoClient
var age = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.count({
    age: {
      $gt: +age
    }
  }, function(err, count) {
    if (err) throw err
    console.log(count)
    db.close()
  });
});

/*
    Save and 'learnyoumongo verify solution.js' the above code.
*/