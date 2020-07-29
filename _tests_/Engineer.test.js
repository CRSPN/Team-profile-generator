var Engineer=require("../lib/Engineer")

test("", () => {
    const engineer = new Engineer('Dave',1,"dav@5.com", "DVEED");
  
    expect("Dave").toEqual(expect.stringContaining(engineer.getName().toString()));
    expect("1").toEqual(expect.stringContaining(engineer.getId().toString()));
    expect("dav@5.com").toEqual(expect.stringContaining(engineer.getEmail().toString()));
    expect("DVEED").toEqual(expect.stringContaining(engineer.getGithub().toString()));
    expect("Engineer").toEqual(expect.stringContaining(engineer.getRole().toString()));
  });