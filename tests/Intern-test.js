const Intern = require("../lib/Intern-class");

test("Sets the school through a constructor function", () => {
  const testData = "ECU";
  const e = new Intern("Smith", 1, "test@test.com", testData);
  expect(e.university).toBe(testData);
});

test("getRole() returns \"Intern\"", () => {
  const testData = "Intern";
  const e = new Intern("Smith", 1, "test@test.com", "ECU");
  expect(e.getRole()).toBe(testData);
});

test("getSchool() returns the school/university", () => {
  const testData = "ECU";
  const e = new Intern("Smith", 1, "test@test.com", testData);
  expect(e.getUniversity()).toBe(testData);
});