// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday
var statement;
switch (new Date().getDay()) {
  case 1:
    statement = "Something witty";
    break;
    case 2:
    statement = "Something else witty";
    break;
    case 3:
    statement = "Something about Hump day";
    break;
    case 4:
    statement = "cliche statement about it almost being the weekend";
    break;
    case 5:
    statement = "I wish that song never existed";
    break;
  default:
  statement = "I guess it's the weekend."
}
