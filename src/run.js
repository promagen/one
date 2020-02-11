module.exports = class Run {
    constructor(name){
        this.name = name ;
    }

    print(){
        console.log('Name is :'+ this.name);
    }
};