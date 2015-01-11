

var Person = require('./SayImpl');

var Interface = require('./Interface');
var ISay = require('./ISay');
function test(isay){


    try{
        console.log(isay['sayHi']);
        Interface.ensureImplements(isay,ISay);


        isay.sayHi();
        isay.sayHello();
    }catch (e){
        console.log('failed!'+e.message);
    }

    console.log('after try-catch');




}


test(new Person('zcui',31));