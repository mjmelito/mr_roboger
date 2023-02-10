/*Business Logic*/

let count = [];

function countToNumber(userNumber) {
  for (let i = userNumber; i >= 0; i--) {
    count.push(i);
  }
  count.reverse();
  console.log(count);
}

function numReplace(count) {
  for (let i = 0; i < count.length; i++) {
    if (String(count[i]).includes("2")) {
      count[i] = "Boop!";
    }

    else if (String(count[i]).includes("1")) {
      count[i] = "Beep!";
    }
  }
  console.log(count);
}