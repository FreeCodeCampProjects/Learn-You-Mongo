/*
    "Next up is aggregation. Aggregation allows one to do things like
    calculate the sum of a field of multiple documents or the average
    of a field of documents meeting particular criteria.
    Say you have a collection named prices. Each price document is modeled
    like so:

      {
        "name": "Tshirt",
        "size": "S",
        "price": 10,
        "quantity": 12
        "meta": {
          "vendor": "hanes",
          "location": "US"
        }
      }

  In this exercise, we need to calculate the average price for all documents
  in the prices collection in the database named learnyoumongo that have
  the size that will be passed as the first argument to your script."
*/

var mongo = require('mongodb').MongoClient;
var size = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var prices = db.collection('prices');
    prices.aggregate([
        { 
            $match: { size: size }
        } ,{ 
            $group: {
                _id: 'average',
                average: { $avg: '$price' }
            }
        }]).toArray(function(err, results) {
            if (err) throw err
            if (!results.length) {
                throw new Error('No results found')
            }
            
        var output = results[0];
        console.log(Number(output.average).toFixed(2));
        db.close();
    });
});

/*
    Save and 'learnyoumongo verify solution.js' the above code.
*/