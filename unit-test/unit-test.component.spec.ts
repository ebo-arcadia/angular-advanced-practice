function add(x: number,y: number) {
  var z = x + y
  return z
}

it("should equal", () => {
  var actualResult = add(10, 14);
  var expectedResult = 24;
  expect(actualResult).toBe(expectedResult);
});