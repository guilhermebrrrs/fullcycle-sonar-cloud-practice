const add = (a: number, b: number): number => {
  return a + b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const factorial = (n: number): number => {
  return n * (n === 1 ? 1 : factorial(n - 1));
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const power = (base: number, exponent: number): number => {
  return base ** exponent;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

export { add, divide, factorial, multiply, power, subtract };
