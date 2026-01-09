function add(num1, num2) {
    var result;
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    var result;
    result = num1 - num2;
    return result;

}

function multiply(num1, num2) {
    var result;
    result = num1 * num2;
    return result;

}

function calculate(num1, num2, operation) {
    var result;

    var num1;
    var num2;
    var operation;

    num1 = 10;
    num2 = 20;
    operation = add;

    //do some preparatory stuff
    //perform the operation
    result = operation(num1, num2);
    //display the result on screen
    //return the result
    return result;
}

/*CONSOLE

>calculate(10, 20, add);

30

> calculate(10, 20, subtract);

-10

> calculate(10, 20, multiply)
200

 */