import { add, divide, factorial, isPrime, multiply, power, subtract } from ".";
import { primes } from "./utils";

test("add function", () => {
  expect(add(1000, 1)).toBe(1001);
});

test("divide function", () => {
  expect(divide(25, 2)).toBe(12.5);
});

test("factorial function", () => {
  expect(factorial(12)).toBe(479001600);
});

test("power function", () => {
  expect(power(2, 10)).toBe(1024);
});

/* describe.each(primes)("isPrime function", (number: number) => {
  test(`is ${number} a prime number`, () => {
    expect(isPrime(number)).toBeTruthy;
  });
}); */

test(`isPrime function`, () => {
  primes.forEach(number => expect(isPrime(number)).toBeTruthy)
});
