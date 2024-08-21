import { add, divide, subtract } from "./functions";
import { primes } from "./utils";

test("add function", () => {
  expect(add(1000, 1)).toBe(1001);
});

test("divide function", () => {
  expect(divide(25, 2)).toBe(12.5);
});
