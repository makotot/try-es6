console.log('---------------------------------------------------------------------------------------------------');
console.log('Let');
console.log('---------------------------------------------------------------------------------------------------');

for (let i = 0, max = 10; i < max; i++) {
  console.log(i);
}
console.log(typeof i);

if (1) {
  let foo = 'foo';
}
console.log(foo);

var x = 0;
while (x < 100) {
  let y = x * x;
  x++;
}

console.log(x, y);


let j = 'hello';

for (let j = 0, end = 10; j < end; j++) {
  j++;
}

console.log(j);


console.log('---------------------------------------------------------------------------------------------------');
