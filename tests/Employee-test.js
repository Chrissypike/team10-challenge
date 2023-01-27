const Employee = require('../lib/Employee-class');

test("Can install Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name through the constructor arguments", () => {
    const name = "Miles";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id through constructor argument", () => {
    const testData = 100;
    const e = new Employee("Smith", testData);
    expect(e.id).toBe(testData);
  });
  
  test("Can set email through the constructor argument", () => {
    const testData = "test@test.com";
    const e = new Employee("Smith", 1, testData);
    expect(e.email).toBe(testData);
  });
  
  test("getName() returns name", () => {
    const testData = "Miles";
    const e = new Employee(testData);
    expect(e.getName()).toBe(testData);
  });
  
  test(" getId() returns id", () => {
    const testData = 100;
    const e = new Employee("Smith", testData);
    expect(e.getId()).toBe(testData);
  });
  
  test("getEmail() returns email address", () => {
    const testData = "test@test.com";
    const e = new Employee("Smith", 1, testData);
    expect(e.getEmail()).toBe(testData);
  });
  
  test("getRole() returns \"Employee\"", () => {
    const testData = "Employee";
    const e = new Employee("Miles", 1, "test@test.com");
    expect(e.getRole()).toBe(testData);
  });
