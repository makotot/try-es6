var obj = {
  foo () {
    return 'foo!!!';
  },

  _bar: 'bar',

  get bar () {
    return this._bar;
  },

  set bar (_bar) {
    this._bar = _bar;
  }
};

console.log(obj.foo());
console.log(obj.bar);
