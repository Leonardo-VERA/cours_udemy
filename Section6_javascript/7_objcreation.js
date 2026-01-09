//function used to build ("construct") an object
function Car(numberOfDoors, brand) {
this. numberOfDoors = numberOfDoors;
this.brand = brand;
}

//object creation using the "new" operator on the function call
var myNewCar = new Car(5, "Toyota");

var literalCar = {
numberOfDoors: 4,
brand: "Nissan"
};

var luxuryCar = new Car(5, "Mercedes");
var ludicrousCar = new Car(2, "Ferrari");
var batmanCar = new Car(0, "Murcielago");