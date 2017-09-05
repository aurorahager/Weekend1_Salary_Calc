//Weekend Challenge 1: Salary Calculator

// Array to store added employees 
var empArray = [];
//global total salary
var totalSal = 0;

//JQuery
$(document).ready(onReady);

function onReady() {
    $('#addButton').on('click', createEmp);
    $('#addButton').on('click', salCalc);
    $('#searchButton').on('click', search);
    $('#searchButton').on('click', reset);
    $('#delButton').on('click', deleteEmp);
    $('#delButton').on('click', reset);
} //END onReady function

// function that creates new obj from user input
function createEmp() {
    new Employee($('#firstName').val(), $('#lastName').val(), $('#idNum').val(), $('#job').val(), $('#annSal').val());
    // clear input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#job').val('');
    $('#annSal').val('');
} //END createEmp function

// Function on delete click deletes employee and updates total
function deleteEmp(salTotal) {
    //Local variables
    var salTotal = totalSal;
    var nameF = $('#searchFirst').val();
    var nameL = $('#searchLast').val();
    var id = $('#searchId').val();
    //remove employee from DOM
    $('#searchResults').remove();
    //Loops through employees finds match
    for (var i = 0; i < empArray.length; i++) {
        if (empArray[i].firstName === nameF && empArray[i].lastName === nameL && empArray[i].idNumber === id) {
            //remove from array
            empArray[i].pop();
        } //END if match
        salTotal -= Number(empArray[i].annualSalary);
    } //END for loop
    //set cost to new total
    var monthlySal = salTotal / 12;
    $('#cost').replaceWith('<p id="cost"> Cost: $' + monthlySal + '</p>');
} //END deleteEmp

// employee constructor function
function Employee(fName, lName, id, job, sal) {
    this.firstName = fName;
    this.lastName = lName;
    this.idNumber = id;
    this.jobTitle = job;
    this.annualSalary = sal;
    // add new employees to array
    empArray.push(this);
} //END constructor

//function to calculate salary
function salCalc() {
    //loop through employees 
    for (var i = 0; i < empArray.length; i++) {
        totalSal += Number(empArray[i].annualSalary);
    } //END for loop
    var monthlySal = totalSal / 12;
    // append monthly salary to DOM
    $('#cost').replaceWith('<p id="cost"> Cost: $' + monthlySal + '</p>');
} //END salCalc function

function search() {
    console.log('search click!');
    //Local variables. User input
    var nameF = $('#searchFirst').val();
    var nameL = $('#searchLast').val();
    var id = $('#searchId').val();
    //Loop through employees find matches
    for (var i = 0; i < empArray.length; i++) {
        if (empArray[i].firstName === nameF && empArray[i].lastName === nameL && empArray[i].idNumber === id) {
            // add matches to DOM
            $('#searchResults').replaceWith('<p id= "searchResults"><strong>Employee Name: </strong>' + empArray[i].firstName + ' ' + empArray[i].lastName + '<strong> Job Title:</strong> ' + empArray[i].jobTitle + ' </p>');
        } //END match if
    } //END for loop
}; //END search

function reset() {
    $("#searchFirst").val(' ');
    $('#searchLast').val(' ');
    $('#searchId').val(' ');
}

//CALL totalSal into deleteEmp
deleteEmp(totalSal);