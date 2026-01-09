function Car () {
this.numbersOfDoors = 5;
this.brand = "Toyota";

//this.start = function() [};
//this.stop = function() (};

}

Car.prototype. start = function() {};
Car.prototype.stop = function() {};

var luxuryCar = new Car();
var cheapCar = new Car();

//let's add a new property to the Car function prototype
// functions always in the prototype
Car.prototype. author="David";