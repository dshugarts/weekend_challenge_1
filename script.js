console.log('script sourced');

var employeeOut = [];

$(document).ready(function() {
    console.log('JQ');
  $('#submitBtn').on('click', function() {
    var newObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        empId: $('#empId').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
      }; // end newObject
      employeeOut.push(newObject);

      displayEmployees();
      displayMonthlyCost();

      $('#firstName').val('');
      $('#lastName').val('');
      $('#empId').val('');
      $('#jobTitle').val('');
      $('#annualSalary').val('');
      // clear textboxes
  }); // end submit

  $('#employees').on('click', '#deleteBtn', function() {
    var deleteId = $(this).data('id');
    var removedEmp = employeeOut.splice(deleteId, 1);
    displayEmployees();
  }); // end delete button

}); // end doc ready

function displayEmployees() {
  var outputList = $('#employees');
  outputList.empty();
  for(var i=0; i<employeeOut.length; i++){
    var stringToAppend = '<li>';
    stringToAppend += employeeOut[i].firstName + ', ';
    stringToAppend += employeeOut[i].lastName + ', ';
    stringToAppend += employeeOut[i].empId + ', ';
    stringToAppend += employeeOut[i].jobTitle + ', ';
    stringToAppend += employeeOut[i].annualSalary + ' ';
    stringToAppend += '<button id="deleteBtn" data-id="' + i + '">Delete</button>';
    stringToAppend += '</li>';
    outputList.append(stringToAppend);
  } // end loop
}

function displayMonthlyCost() {
  var costList = $('#monthlyCost');
  costList.empty();
  var costSum = 0;
  for(var i=0; i<employeeOut.length; i++){
  var totalSalary = (costSum += parseInt(employeeOut[i].annualSalary));
  } // end loop
  var newStringToAppend = '<li>';
  newStringToAppend += totalSalary;
  costList.append(newStringToAppend);
}
