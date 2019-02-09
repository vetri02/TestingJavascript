const { sumAsync, subtractAsync } = require("./math");

test("sumAsync adds numbers asyn", async () => {
  const result = await sumAsync(2, 3);
  const expected = 5;

  expect(result).toBe(expected);
});

test("Subtract subtracts numbers", async () => {
  const result = await subtractAsync(5, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
