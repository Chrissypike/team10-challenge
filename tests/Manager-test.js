const Manager = require("../lib/Manager-class");

test("Sets the office number through a constructor argument", () => {
  const testData = 100;
  const e = new Manager("Smith", 1, "test@test.com", testData);
  expect(e.officeNumber).toBe(testData);
});

test("getRole() returns \"Manager\"", () => {
  const testData = "Manager";
  const e = new Manager("Smith", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testData);
});

test("getOffice() returns the office number", () => {
  const testData = 100;
  const e = new Manager("Smith", 1, "test@test.com", testData);
  expect(e.getOfficeNumber()).toBe(testData);
});