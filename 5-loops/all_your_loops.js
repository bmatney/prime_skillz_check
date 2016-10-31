// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
while (i > 1) {
  checkz -= 2;
  i--;
}
console.log(checkz);
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// This function will loop through the array title "numbers".
// Each time that the loop occurs our variable "total" will add the new amount
// to it's current value.
// The loop will stop once it has reached the last index of the array.
// We will then log the final result of total = 28
