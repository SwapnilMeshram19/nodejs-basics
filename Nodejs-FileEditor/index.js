var args = process.argv.slice(2);
var fs = require("fs");

console.log(FileSystem(args));

function FileSystem(args) {
  switch (args[0]) {
    case "read":
      const data=fs.readFileSync(args[1])
      return data.toString();
    case "append":
      fs.appendFileSync(args[2],(` ${args[1]}`).toString());
      return (fs.readFileSync(args[2])).toString()

    case "delete":
      fs.unlinkSync(args[1]);
      return "file deleted";
    case "create":
      fs.createWriteStream(args[1]);
      return "file created"
    case "rename":
      fs.renameSync(args[1],args[2])
      return `file rename to ${args[2]}`
    case "list":
      fs.readdirSync(args[1]).forEach(files=>{
        console.log(files)
      })

    default:
      return "end"
  }
}
