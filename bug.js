```javascript
//Incorrect usage of $in operator in MongoDB aggregation
db.collection('myCollection').aggregate([
  {
    $match: {
      field: {
        $in: [1, 2, '3'] //Mixing number and string types 
      }
    }
  }
])
```