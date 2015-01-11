/**
 * Created by zcui on 1/11/15.
 */
function Person(name,age){

    this.name = name;
    this.age = age;
    
}
Person.prototype.sayHi = function () {


    console.log('sayHi');

}


Person.prototype.sayHello = function () {

    console.log('sayHello');
}

module.exports = Person;