
function Car(brand, year) {
    this.brand = brand;
    this.year = year;
    this.engine = "stopped";
}

Car.prototype.start = function() {
this.engine = "started";
};

Car.prototype.stop = function() {
this.engine = "stopped";
};

var oldChevy = new Car("Chevy", 1950);
var newFerrari = new Car("Ferrari", 2014);

function startme() {
this.test = 1;

}

//dans la console
// oldChevy
// newFerrary
// newFerrary.start();
//newFerrary.engine();
// new
