import { add, divide, factorial, power } from ".";

test("Add function", () => {
  expect(add(1000, 1)).toBe(1001);
});

test("Divide function", () => {
  expect(divide(25, 2)).toBe(12.5);
});

test("Factorial function", () => {
  expect(factorial(12)).toBe(479001600);
});

test("Power funciton", () => {
  expect(power(2, 10)).toBe(1024);
});
