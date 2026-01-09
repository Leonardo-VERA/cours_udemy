var webCategories = [ "Front End Developer", "Backend Developer", "Fullstack Developer"];
var uppercasedCategories = [];

/*
function uppercaseElement(element, index, array) {
    uppercasedCategories.push(element.toUpperCase());
}

webCategories.forEach(uppercaseElement);
*/

//add an additional cell value, creating a gap
webCategories[4] = "last element";

//explicit iteration
//we want to end the loop when we find a cell with a value that starts with "last";
for(var i = 0; i < webCategories.length; i=i+1) {
    var value = webCategories[i];
    if( value !== undefined) {
        if(value.indexOf("last") === 0) {
            break;
        }
        uppercasedCategories.push(value.toUpperCase());
    }
}








/*CONSOLE TEST

> uppercasedCategories;
["FRONT END DEVELOPER", "BACKEND DEVELOPER", "FULLSTACK DEVELOPER"]


 */