const employee = {
    name: "Joe " ,
    streetAdress: "15 Airwaves"
}
function beforeEach(){
    for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';

}
 function updateEmployeeWithKeyAndValue(object, key, value){
    beforeEach()
    const newEmployee = {... object}
    newEmployee[key] =value 
    return newEmployee

 }
 console.log(updateEmployeeWithKeyAndValue(employee, "streetAdress", "11 Broadway"))


function destructivelyUpdateEmployeeWithKeyAndValue(object, key,value){
    beforeEach()
    object[key]= value
    return object

}
    console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway" ))

function deleteFromEmployeeByKey(object, key){
    beforeEach()
    const anotherEmployee ={... object}
    delete anotherEmployee[key]
    return anotherEmployee 
}
console.log(deleteFromEmployeeByKey(employee, "streetAdress"))

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object


}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))