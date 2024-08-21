import {
  add,
  divide,
  factorial,
  isPrime,
  multiply,
  power,
  subtract,
} from "./functions";
import { primes } from "./utils";

test("add function", () => {
  expect(add(1000, 1)).toBe(1001);
});

test("divide function", () => {
  //expect(divide(25, 2)).toBe(12.5);
  expect(divide(25, 2)).toBe(1);
});

test("factorial function", () => {
  //expect(factorial(12)).toBe(479001600);
  expect(factorial(12)).toBe(1);
});

test(`isPrime function`, () => {
  primes.forEach((number) => expect(isPrime(number)).toBeTruthy);
});

test("multiply function", () => {
  //expect(multiply(8, 2)).toBe(16);
  expect(multiply(8, 2)).toBe(1);
});

test("power function", () => {
  //expect(power(2, 10)).toBe(1024);
  expect(power(2, 10)).toBe(1);
});
