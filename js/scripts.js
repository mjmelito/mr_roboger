window.onload = function() {

/*Business Logic*/


  function countToNumber(userNumber) {
    let count = [];
    for (let i = userNumber.value; i >= 0; i--) {
      count.push(i);
    }
    count.reverse();
    return count;
  }

  function numReplace(count) {
    let newCount = [];
    for (let i = 0; i < count.length; i++) {
      if (String(count[i]).includes("3")) {
        newCount.push("Won't you be my neighbor?");
      }
      else if (String(count[i]).includes("2")) {
        newCount.push("Boop!");
      }
      else if (String(count[i]).includes("1")) {
        newCount.push("Beep!");
      } else {
        newCount.push(count[i]);
      }
    }
    return newCount.join(', ');
  }
/*UI Logic*/

  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let count = [];
    let userNumber = document.getElementById("userNumber");
    count = countToNumber(userNumber);
    let result = document.getElementById("result");
    result.innerText = ' ';
    result.innerText = numReplace(count);  
  }
}