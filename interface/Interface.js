var Interface = function (name, methods) {


    if(arguments.length != 2){

        throw  new Error("Interface constructor called with "+arguments.length+ "arguments, but expected exactly 2");
    }

    this.name = name;
    this.methods = [];


    for(var i = 0,len = methods.length;i<len;i++){

        if(typeof methods[i] != 'string'){

            throw  new Error('interface constructor expected method names to be passed in as a string');

        }

        this.methods.push(methods[i]);
    }
}


Interface.ensureImplements  = function (object) {


    if(arguments.length<2){
        throw  new Error('function Interface.ensureImplements  called with '+arguments.length+'arguments ,but expected at least 2');
    }

    for(var i = 1,len = arguments.length;i < len; i++){

        var interface = arguments[i];
        if(interface.constructor != Interface){

            throw new Error('方法Interface.ensureImplements 的参数应该有两个或以上的Interface的实例');
        }

        for(var j = 0,mlen = interface.methods.length;j<mlen;j++){

            var method = interface.methods[j];
            if(!object[method] ||typeof object[method]!='function'){
                throw  new Error('Interface.ensureImplements：object没有实现 '+interface.name +'接口的'+method+'方法');
            }
        }
    }
}


module.exports = Interface;