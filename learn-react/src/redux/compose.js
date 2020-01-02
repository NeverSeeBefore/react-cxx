export default function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0]();
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// function fun1(n) {
//   return n * 2;
// }

// function fun2(n) {
//   return n + 2;
// }

// console.log(compose(fun1, fun2)(1));
