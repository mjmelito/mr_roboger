Describe: countToNumber()

  Test: "It should count down from 1 to 0."
  Code:
  countToZero(1);
  Expected Output: (0, 1)

  Test: "It should count down from user input to 0."
  Code:
  countToZero(x);
  Expected Output: (x, x-1, x-2, ... 0)

  Test: "It should display countdown as an array."
  Code:
  countToZero(x);
  Expected Output: [x, x-1, x-2, ... 0]

  Test: "It should display a reversed array that starts at 0 and counts up to user number."
  Code:
  countToZero(x);
  Expected Output: [0, 1, 2, 3, ... x]

Describe: numReplace

  Test: "It should replace all numbers containing 1 with 'Beep!'."
  Code:
  countToZero(10);
  numReplace(count);
  Expected Output: [0, 'Beep!' 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!']

  Test: "It should replace all numbers containing 2 with 'Boop!'."
  Code:
  countToZero(20);
  numReplace(count);
  Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']

  Test: "It should replace all numbers containing 3 with 'Won't you be my neighbor?'."
  Code:
  countToZero(20);
  numReplace(count);
  Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']
