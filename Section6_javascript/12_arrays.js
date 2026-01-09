var myArray = [];

var webCategories = [ "Front End Developer", "Backend Developer", "Fullstack Developer"];

var myObject = {
name: "David"

};

var numericValue = 10;
var mixedArray = [ numericValue, "I'm a string", true, myObject ];

mixedArray[3].name = "John";
mixedArray[0] = 20;

//concatenate 2 arrays
webCategories.concat( mixedArray );

//look for a value in an array
mixedArray.index0f(true);

//add a new element to the array
mixedArray.push("another string");

//remove last element
mixedArray.pop();

//remove first element
mixedArray.shift();

var uppercasedCategories = [];

function uppercaseElement(element, index, array) {
uppercasedCategories.push( element.toUpperCase() );
}

webCategories.forEach(uppercaseElement);






/* CONSOLE
> mixedArray[0]

10

> mixedArray[1]

"I'm a string"

> mixedArray[2]

true

> mixedArray. length

3

> var gapArray = [];

undefined

> gapArray[10] = "value at index 10";

"value at index 10"

gapArray
[undefined, undefined, undefined, undefined, undefined, undefined, undefined,
undefined, undefined, undefined, "value at index 10"]

> gapArray. length

11

A
*/

/* CONSOLE TOO
> mixedArray

[20, "I'm a string", true, [object Object] {
name: "John"

> numericValue

10

> webCategories.concat( mixedArray );

["Front End Developer", "Backend Developer", "Fullstack Developer", 20, "I'm a string",
true, [object Object] {
name: "John"

> mixedArray.indexOf(true);

2

> mixedArray. indexOf(false);

-1

> mixedArray

[20, "I'm a string", true, [object Object] {
name: "John"
}, "another string"]
*/



/*CONSOLE FINALY TEST

> uppercasedCategories

["FRONT END DEVELOPER", "BACKEND DEVELOPER", "FULLSTACK DEVELOPER"]

*/