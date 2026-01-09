//variable content copied by value
var firstName = "John";
var referenceToName = firstName;

//changing the value of a variable doesn't affect the other one
firstName = "Joe";

//variable content copied by reference
var user = { firstName: "John", lastName: "Doe"};
var referenceToUser = user;

//changing the value of the object will reflect on both variables
user. firstName = "Joe";
referenceToUser. lastName = "Black";

function getLastname() { return "some return value"; }
var referenceToFunction = getLastname;