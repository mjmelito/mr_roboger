# Matthew Melito Mr. Roboger's Neighborhood

#### By Matthew Melito

#### A unique counting tool that doubles as a dialogue generator for a cyberpunk Mr. Roger's Neighborhood reboot.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This site allows users to input any whole number, and will return a list of numbers counting up to that number. It will then replace any integer including a 1, 2, or 3 with pre-chosen text to form a robotic but neighborly language. 

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

None

## License

*This project uses the following license: [MIT](https://opensource.org/licenses/MIT)*

Copyright (c) 2023
**_Matthew Melito_**


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
