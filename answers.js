// create 5 burgers (at least 3 should be beef)



// find all the burgers
db.orders.find()

[
  {
    _id: ObjectId('65c149aa619b0f83ca81a553'),
    protein: 'Chicken',
    cheese: true,
    toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
    calories: 900,
    price: 6.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a554'),
    protein: 'Beef',
    cheese: true,
    toppings: [ 'ketchup', 'onion', 'green pepper', 'mustard', 'olive' ],
    calories: 1300,
    price: 9.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a555'),
    protein: 'Chicken',
    cheese: false,
    toppings: [ 'mayo', 'green pepper', 'lettuce', 'tomato', 'green pepper' ],
    calories: 700,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a556'),
    protein: 'Fish',
    cheese: true,
    toppings: [ 'mayo', 'pickles' ],
    calories: 750,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a557'),
    protein: 'Bison',
    cheese: false,
    toppings: [ 'tomato', 'ketchup', 'green pepper' ],
    calories: 800,
    price: 10.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a558'),
    protein: 'Lobster',
    cheese: true,
    toppings: [ 'mayo', 'pickles', 'butter' ],
    calories: 600,
    price: 15.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a559'),
    protein: 'Crab',
    cheese: false,
    toppings: [ 'lettuce', 'tomato', 'mayo', 'garlic' ],
    calories: 800,
    price: 18.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55a'),
    protein: 'Pork',
    cheese: false,
    toppings: [ 'barbecue sauce', 'green pepper', 'onion' ],
    calories: 1000,
    price: 12.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55b'),
    protein: 'Wagyu',
    cheese: true,
    toppings: [ 'murshoom', 'barbecue sauce' ],
    calories: 1200,
    price: 99.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55c'),
    protein: 'Tofu',
    cheese: false,
    toppings: [ 'onion', 'green pepper', 'lettuce', 'tomato' ],
    calories: 390,
    price: 6.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55d'),
    protein: 'Beef',
    cheese: false,
    toppings: [ 'tomato', 'lettuce', 'hot sauce', 'garlic' ],
    calories: 880,
    price: 10.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55e'),
    protein: 'Beef',
    cheese: true,
    toppings: [ 'ketchup', 'onion', 'tomato', 'garlic', 'murshoom', 'bacon' ],
    calories: 1000,
    price: 12.99
  }
]

// show just the meat of each burger

burgers> db.orders.find({}, { protein: 1, _id: 0 })

[
  { protein: 'Chicken' },
  { protein: 'Beef' },
  { protein: 'Chicken' },
  { protein: 'Fish' },
  { protein: 'Bison' },
  { protein: 'Lobster' },
  { protein: 'Crab' },
  { protein: 'Pork' },
  { protein: 'Wagyu' },
  { protein: 'Tofu' },
  { protein: 'Beef' },
  { protein: 'Beef' }
]


// show just the toppings of each burger

burgers> db.orders.find({}, { toppings: 1, _id: 0 })

[
  { toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ] },
  {
    toppings: [ 'ketchup', 'onion', 'green pepper', 'mustard', 'olive' ]
  },
  {
    toppings: [ 'mayo', 'green pepper', 'lettuce', 'tomato', 'green pepper' ]
  },
  { toppings: [ 'mayo', 'pickles' ] },
  { toppings: [ 'tomato', 'ketchup', 'green pepper' ] },
  { toppings: [ 'mayo', 'pickles', 'butter' ] },
  { toppings: [ 'lettuce', 'tomato', 'mayo', 'garlic' ] },
  { toppings: [ 'barbecue sauce', 'green pepper', 'onion' ] },
  { toppings: [ 'murshoom', 'barbecue sauce' ] },
  { toppings: [ 'onion', 'green pepper', 'lettuce', 'tomato' ] },
  { toppings: [ 'tomato', 'lettuce', 'hot sauce', 'garlic' ] },
  {
    toppings: [ 'ketchup', 'onion', 'tomato', 'garlic', 'murshoom', 'bacon' ]
  }
]


// show everything but the cheese

burgers> db.orders.find({}, { cheese: 0 })

[
  {
    _id: ObjectId('65c149aa619b0f83ca81a553'),
    protein: 'Chicken',
    toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
    calories: 900,
    price: 6.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a554'),
    protein: 'Beef',
    toppings: [ 'ketchup', 'onion', 'green pepper', 'mustard', 'olive' ],
    calories: 1300,
    price: 9.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a555'),
    protein: 'Chicken',
    toppings: [ 'mayo', 'green pepper', 'lettuce', 'tomato', 'green pepper' ],
    calories: 700,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a556'),
    protein: 'Fish',
    toppings: [ 'mayo', 'pickles' ],
    calories: 750,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a557'),
    protein: 'Bison',
    toppings: [ 'tomato', 'ketchup', 'green pepper' ],
    calories: 800,
    price: 10.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a558'),
    protein: 'Lobster',
    toppings: [ 'mayo', 'pickles', 'butter' ],
    calories: 600,
    price: 15.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a559'),
    protein: 'Crab',
    toppings: [ 'lettuce', 'tomato', 'mayo', 'garlic' ],
    calories: 800,
    price: 18.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55a'),
    protein: 'Pork',
    toppings: [ 'barbecue sauce', 'green pepper', 'onion' ],
    calories: 1000,
    price: 12.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55b'),
    protein: 'Wagyu',
    toppings: [ 'murshoom', 'barbecue sauce' ],
    calories: 1200,
    price: 99.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55c'),
    protein: 'Tofu',
    toppings: [ 'onion', 'green pepper', 'lettuce', 'tomato' ],
    calories: 390,
    price: 6.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55d'),
    protein: 'Beef',
    toppings: [ 'tomato', 'lettuce', 'hot sauce', 'garlic' ],
    calories: 880,
    price: 10.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55e'),
    protein: 'Beef',
    toppings: [ 'ketchup', 'onion', 'tomato', 'garlic', 'murshoom', 'bacon' ],
    calories: 1000,
    price: 12.99
  }
]


// find all the burgers with beef

db.orders.find({ protein: "Beef" })

[
  {
    _id: ObjectId('65c149aa619b0f83ca81a554'),
    protein: 'Beef',
    cheese: true,
    toppings: [ 'ketchup', 'onion', 'green pepper', 'mustard', 'olive' ],
    calories: 1300,
    price: 9.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55d'),
    protein: 'Beef',
    cheese: false,
    toppings: [ 'tomato', 'lettuce', 'hot sauce', 'garlic' ],
    calories: 880,
    price: 10.99
  },
  {
    _id: ObjectId('65c14a9c619b0f83ca81a55e'),
    protein: 'Beef',
    cheese: true,
    toppings: [ 'ketchup', 'onion', 'tomato', 'garlic', 'murshoom', 'bacon' ],
    calories: 1000,
    price: 12.99
  }
]


// find all the burgers that are not beef

db.orders.find({ protein: { $ne: "Beef" } })

[
  {
    _id: ObjectId('65c149aa619b0f83ca81a553'),
    protein: 'Chicken',
    cheese: true,
    toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
    calories: 900,
    price: 6.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a555'),
    protein: 'Chicken',
    cheese: false,
    toppings: [ 'mayo', 'green pepper', 'lettuce', 'tomato', 'green pepper' ],
    calories: 700,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a556'),
    protein: 'Fish',
    cheese: true,
    toppings: [ 'mayo', 'pickles' ],
    calories: 750,
    price: 8.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a557'),
    protein: 'Bison',
    cheese: false,
    toppings: [ 'tomato', 'ketchup', 'green pepper' ],
    calories: 800,
    price: 10.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a558'),
    protein: 'Lobster',
    cheese: true,
    toppings: [ 'mayo', 'pickles', 'butter' ],
    calories: 600,
    price: 15.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a559'),
    protein: 'Crab',
    cheese: false,
    toppings: [ 'lettuce', 'tomato', 'mayo', 'garlic' ],
    calories: 800,
    price: 18.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55a'),
    protein: 'Pork',
    cheese: false,
    toppings: [ 'barbecue sauce', 'green pepper', 'onion' ],
    calories: 1000,
    price: 12.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55b'),
    protein: 'Wagyu',
    cheese: true,
    toppings: [ 'murshoom', 'barbecue sauce' ],
    calories: 1200,
    price: 99.99
  },
  {
    _id: ObjectId('65c149aa619b0f83ca81a55c'),
    protein: 'Tofu',
    cheese: false,
    toppings: [ 'onion', 'green pepper', 'lettuce', 'tomato' ],
    calories: 390,
    price: 6.99
  }
]

// find the first burger with cheese

db.orders.findOne({ cheese: true })

{
  _id: ObjectId('65c149aa619b0f83ca81a553'),
  protein: 'Chicken',
  cheese: true,
  toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
  calories: 900,
  price: 6.99
}


// find one and update the first burger with cheese to have a property of 'double cheese'
burgers> db.orders.findOneAndUpdate(
    ...   { cheese: true },
    ...   { $set: { doubleCheese: true } },
    ...   { returnNewDocument: true }
    ... )

    {
      _id: ObjectId('65c149aa619b0f83ca81a553'),
      protein: 'Chicken',
      cheese: true,
      toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
      calories: 900,
      price: 6.99,
      doubleCheese: true
    }
    


// find the burger you updated to have double cheese

db.orders.find({ doubleCheese: true })

[
  {
    _id: ObjectId('65c149aa619b0f83ca81a553'),
    protein: 'Chicken',
    cheese: true,
    toppings: [ 'mayo', 'tomato', 'green pepper', 'onion' ],
    calories: 900,
    price: 6.99,
    doubleCheese: true
  }
]


// find and update all the beef burgers to be 'veggie'

// delete one of your veggie burgers


// drop the collection
//Expected Output
//true

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
