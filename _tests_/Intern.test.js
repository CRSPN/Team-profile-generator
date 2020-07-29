var Intern =require("../lib/Intern")

test("", () => {
    const intern = new Intern ('Dave',1,"dav@5.com", "UofU");
  
    expect("Dave").toEqual(expect.stringContaining(intern.getName().toString()));
    expect("1").toEqual(expect.stringContaining(intern.getId().toString()));
    expect("dav@5.com").toEqual(expect.stringContaining(intern.getEmail().toString()));
    expect("UofU").toEqual(expect.stringContaining(intern.getSchool().toString()));
    expect("Intern").toEqual(expect.stringContaining(intern.getRole().toString()));
  });