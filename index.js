const employee = {
    name: "" ,
    street: ""
}
function beforeEach(){
    for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';

}
 function updateEmployeeWithKeyAndValue(object, key, value){
    // const object = {... object}
    

}
