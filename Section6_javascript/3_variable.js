var firstName = "David";

function accessGlobalScope() {
    firstName = "The name has been changed";

}

function localVariableFunction() {
    var lastName;
    lastName = "this variable is local";
}

function leakingVariable() {
    notPreviouslyDefineVar = "this is my value";
}