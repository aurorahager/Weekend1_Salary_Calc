//Weekend Challenge 1: Salary Calculator

// Array to store added employees 
var empArray = [];

//JQuery
$(document).ready(onReady);

function onReady () {
    $('#addButton').on('click', createEmp);      
}//END onReady function

// function that creates new obj from user input
function createEmp() {
    console.log('click');
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

//TEST obj
new Employee ('f','f','22','f', 12);
new Employee('r', 'r', '21', 'r', 10);

//function to calculate salary
 function salCalc () {
     var totalSal = 1;
     // loop through employees     
     }//END for loop
    // return totalSal
 }//END salCalc function
salCalc(empArray);
 
 
 


