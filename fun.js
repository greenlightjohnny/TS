function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
function getSum2(num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(getSum2(1, "4"));
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log("John", "Doe");
