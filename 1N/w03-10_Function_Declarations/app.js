//FUNCTION DECLARATIONS

function greet(firstName='Sunny',lastName='Lee'){
    return 'Hello!' + firstName +' '+lastName;
}

console.log(greet(''));
console.log(greet('Dave','Smith'));


//FUNCTION EXPRESIONS

const square = function(x=3){
    return x*x;
}

console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs


(function greeting(){
    console.log('IIFE RAN.');
})();

(function greet(firstName='Sunny',lastName='Lee'){
    console.log('Hello ' + firstName + ' ' + lastName);
})('Dave','Smith');
//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo ...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(id){
    console.log(`Delete todo id ${id}`);
}

todo.add();
todo.edit(111);
todo.delete(11);