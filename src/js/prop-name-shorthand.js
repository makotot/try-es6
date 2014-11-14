function f (x, y) {
  let foo = x * x,
    bar = y * y;
  return {foo, bar, x, y};
}

console.log(f(1, 2));
