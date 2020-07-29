var Manager=require("../lib/Manager")

test("", () => {
    const manager = new Manager('Dave',1,"dav@5.com", "8675309");
  
    expect("Dave").toEqual(expect.stringContaining(manager.getName().toString()));
    expect("1").toEqual(expect.stringContaining(manager.getId().toString()));
    expect("dav@5.com").toEqual(expect.stringContaining(manager.getEmail().toString()));
    expect("8675309").toEqual(expect.stringContaining(manager.getOfficeNumber().toString()));
    expect("Manager").toEqual(expect.stringContaining(manager.getRole().toString()));
  });