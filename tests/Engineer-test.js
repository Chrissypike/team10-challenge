const Engineer = require("../lib/Engineer-class");

test("Sets the GitHUb account through constructor", () => {
  const testData = "username";
  const e = new Engineer("Smith", 1, "test@test.com", testData);
  expect(e.username).toBe(testData);
});

test("getRole() returns \"Engineer\"", () => {
  const testData = "Engineer";
  const e = new Engineer("Smith", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testData);
});

test(" getUsername() returns the gitHub username", () => {
  const testData = "username";
  const e = new Engineer("Smith", 1, "test@test.com", testData);
  expect(e.getUsername()).toBe(testData);
});
