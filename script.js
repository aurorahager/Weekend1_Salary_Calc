//Weekend Challenge 1: Salary Calculator

// Array to store added employees 
var empArray = [];

//JQuery
$(document).ready(onReady);

function onReady () {
    $('#addButton').on('click', createEmp); 
    $('#addButton').on('click', salCalc);
}//END onReady function

// function that creates new obj from user input
function createEmp() {
    new Employee($('#firstName').val(), $('#lastName').val(), $('#idNum').val(), $('#job').val(), $('#annSal').val()); 
    // clear input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#job').val('');
    $('#annSal').val('');  
}//END createEmp function

// employee constructor function
function Employee (fName, lName, id, job, sal) {
    this.firstName = fName;
    this.lastName = lName;
    this.idNumber = id;
    this.jobTitle = job;
    this.annualSalary = sal;
    // add new employees to array
    empArray.push(this);  
}//END constructor

//function to calculate salary
 function salCalc () {
  var totalSal = 0;
     //loop through employees 
    for ( var i = 0; i < empArray.length; i++) {
        totalSal += parseInt(empArray[i].annualSalary);
     }//END for loop
     var monthlySal = totalSal / 12;
     // append monthly salary to DOM
    $('#cost').append('<p> Cost: $' + monthlySal + '</p>');
 }//END salCalc function
 