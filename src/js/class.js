console.log('---------------------------------------------------------------------------------------------------');
console.log('Class');
console.log('---------------------------------------------------------------------------------------------------');

class MyClass {
  constructor () {
    this.foo = [];
    this.name = 'my class';
  }

  getName () {
    return this.name;
  }
}


var myClass = new MyClass();

console.log(myClass.getName());


console.log('---------------------------------------------------------------------------------------------------');
