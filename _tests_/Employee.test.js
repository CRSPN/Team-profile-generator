var Employee=require("../lib/Employee")

test("", () => {
    const employee = new Employee('Dave',1,"dav@5.com");
  
    expect("Dave").toEqual(expect.stringContaining(employee.getName().toString()));
    expect("1").toEqual(expect.stringContaining(employee.getId().toString()));
    expect("dav@5.com").toEqual(expect.stringContaining(employee.getEmail().toString()));
    expect("Employee").toEqual(expect.stringContaining(employee.getRole().toString()));
  });