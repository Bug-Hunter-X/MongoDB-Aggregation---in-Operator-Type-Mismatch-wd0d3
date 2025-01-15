```javascript
//Correct usage of $in operator
db.collection('myCollection').aggregate([
  {
    $match: {
      field: {
        $in: [1, 2, 3] //All numbers
      }
    }
  }
])

//Alternative solution converting string to number
db.collection('myCollection').aggregate([
  {
    $match: {
      $expr: {
        $in: [ { $toInt: '$field' }, [1,2,3] ]
      }
    }
  }
])
```