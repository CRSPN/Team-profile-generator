var Engineer=require("../lib/Engineer")

test("", () => {
    const engineer = new Engineer('Dave',1,"dav@5.com", "DVEED");
  
    expect(engineer.getGithub() ).toEqual(expect.stringContaining(engineer.github.toString()));
  });