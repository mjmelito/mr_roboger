/*Business Logic*/
window.onload = function() {

  Form.onsubmit = function(event) {
  event.preventDefault();
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
        if (String(count[i]).includes("3")) {
          count[i] = "Won't you be my neighbor?";
        }
        else if (String(count[i]).includes("2")) {
          count[i] = "Boop!";
        }
        else if (String(count[i]).includes("1")) {
          count[i] = "Beep!";
        }
      }
      console.log(count);
    }
  }
};