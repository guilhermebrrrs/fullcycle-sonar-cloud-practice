const add = (a: number, b: number): number => {
  return a + b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const factorial = (n: number): number => {
  return n * (n === 1 ? 1 : factorial(n - 1));
};

const multiply = (a: number, b: number): number => a * b;

const power = (base: number, exponent: number): number => {
  return base ** exponent;
};

const subtract = (a: number, b: number): number => a - b;

const isPrime = (n: number): boolean => {
  if (n === 2 || n % 2 === 0) return false;
  if (n === 3 || n % 3 === 0) return false;
  if (n === 5 || n % 5 === 0) return false;
  if (n === 7 || n % 7 === 0) return false;

  return true;
};

export { add, divide, factorial, isPrime, multiply, power, subtract };
