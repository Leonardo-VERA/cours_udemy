//if today is a sunny day, then I'll go jogging otherwise I'll stay at home

var isSunnyDay = false;

function checkIfSunny( isSunny ) {
    if (isSunny === true) {
    console.log("let's jog!");
    } else {
    console. log("better stay at home!");
    }
}



/*console
> checkIfSunny(true);
"let's jog!"
undefined

> checkIfSunny(false);
"better stay at home!"
undefined

*/