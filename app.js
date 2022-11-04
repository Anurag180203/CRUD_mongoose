//const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/carsDB', {
//     useNewUrlParser: true
// });
//
// const carSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });
//
// const Car = mongoose.model("Car", carSchema);
//
// const car = new Car({
//     name: "Ferrari",
//     rating: 9,
//     review: "Pretty fast"
// });

//car.save();
//
// mongoose.connect('mongodb://localhost:27017/personsDB', {
//     useNewUrlParser: true
// });



const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        //data validation
        type: String,
        required: [true, "no name specified!"]
    },
    rating: {
        //data validation
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
//
// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "nice"
// });
// fruit.save();
// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit"
// });
// const orange = new Fruit({
//     name: "orange",
//     score: 9,
//     review: "yumyum"
// });
// const banana = new Fruit({
//     name: "banana",
//     score: 8,
//     review: "monkey"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits");
//     }
// });
// const peaches = new Fruit({
//     score: 10,
//     review: "mkey"
// });
// peaches.save();

// Fruit.updateOne({
//     _id: "636565cc09f28be284eff5ca"
// }, {
//     name: "Peach"
// }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated document");
//     }
// });

// Fruit.deleteOne({
//     name: "Peach"
// }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted document");
//     }
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit."
// });
// pineapple.save();

const watermelon = new Fruit({
    name: "Watermelon",
    score: 8,
    review: "Watery fruit."
});
watermelon.save();

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "John",
    age: 37
});
person.save();
// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// });
// person.save();

Person.updateOne({
    name: "John"
}, {
    favoriteFruit: watermelon
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Success update");
    }
})
//
// Person.deleteMany({
//     name: "John"
// }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all document");
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});