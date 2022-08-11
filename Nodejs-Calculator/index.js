var args = process.argv.slice(2);
const crypto=require("crypto");


console.log(calculation(args));

function calculation(args) {
  switch (args[0]) {
    case "add":
      return +args[1] + +args[2];
    case "sub":
      return +args[1] - +args[2];
      case "mult":
      return +args[1] * +args[2];
      case "divide":
        return +args[1] / +args[2];
      case "random":
      return (crypto.randomInt(+args[1],+args[2]));
    default:
      return 0;
  }
}
