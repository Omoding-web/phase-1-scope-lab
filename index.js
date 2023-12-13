// Write your solution in this file!
//Declaring customerName in global scope
var customerName = "bob";
//Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
//Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob";
}
//Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}
//leastFavoriteCustomer declared as a constant
const leastFavoriteCustomer = "maybe bob";

//Function to try change the constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "new bob";
}
