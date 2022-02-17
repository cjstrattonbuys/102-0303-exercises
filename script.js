// EXERCISE 1
var string = "12";
var num = 12;

if (string === num) {
  console.log("They match!");
} else if (string == num) {
  console.log("Something's hinky");
} else {
  console.log("No match!");
}

// EXERCISE 2
var sleep = Number(
  prompt("How many hours of sleep (0-12) do you get per night?")
);
if (sleep > 12) {
  console.log("Nice try, be honest next time!");
} else if (sleep >= 8) {
  console.log("Great job, keep it up!");
} else if (sleep >= 5) {
  console.log("You're doing pretty well, time to step it up!");
} else {
  console.log("Maybe try to get more sleep tonight!");
}

// EXERCISE 3
var chocolate = Number(
  prompt("I have 10 squares of chocolate, how many would you like?")
);
var sharing = 10 - chocolate;
if (chocolate < 3) {
  alert(`No, take more chocolate, I want to share!`);
} else if (chocolate < 8) {
  alert(
    `I hope you enjoyed the chocolate! You took ${chocolate} squares and I have ${sharing} squares left over for myself!`
  );
} else {
  alert(`Nope, that's not fair either, pick again!`);
}
