/*Business Logic*/

function countToNumber(userNumber) {
  let countdown = [];
  for (let i = userNumber; i >= 0; i--) {
    countdown.push(i);
  }
  countdown.reverse();
  console.log(countdown);
}