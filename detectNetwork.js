// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardDigits = cardNumber.split('');

  if ((cardDigits[1]==='8'||cardDigits[1]==='9')&&(cardNumber.length===14)) {
    return 'Diner\'s Club';
  };
  if ((cardDigits[1]==='4'||cardDigits[1]==='7')&&(cardNumber.length===15)) {
    return 'American Express';
  };
  if ((cardDigits[0]==='4'&&cardDigits[1]==='9')||(cardDigits[0]==='5'&&cardDigits[1]==='6'&&cardDigits[2]==='4')||(cardDigits[0]==='6'&&cardDigits[1]==='3'&&cardDigits[2]==='3')||(cardDigits[0]==='6'&&cardDigits[1]==='7'&&cardDigits[2]==='5')) {
    return 'Switch';
  };
   if ((cardDigits[0]==='6'&&cardDigits[1]==='2'&&cardDigits[2]==='2')||(cardDigits[0]==='6'&&cardDigits[1]==='2'&&cardDigits[2]==='4')||(cardDigits[0]==='6'&&cardDigits[1]==='2'&&cardDigits[2]==='5')||(cardDigits[0]==='6'&&cardDigits[1]==='2'&&cardDigits[2]==='6')||(cardDigits[0]==='6'&&cardDigits[1]==='2'&&cardDigits[2]==='8')) {
    return 'China UnionPay';
  };
  if ((cardDigits[0]==='4')&&(cardNumber.length===13||cardNumber.length===16||cardNumber.length===19)) {
    return 'Visa';
  };
  if (((cardDigits[0]==='5')&&(cardDigits[1]!=='0'))&&(cardNumber.length===16)) {
    return 'MasterCard';
  };
  if ((cardDigits[0]==='6')&&(cardDigits[1]==='0'||cardDigits[1]==='4'||cardDigits[1]==='5')&&((cardNumber.length===16)||(cardNumber.length===19))) {
    return 'Discover';
  };
  if ((cardDigits[0]==='5'&&cardDigits[1]==='0')||(cardDigits[0]==='6'&&cardDigits[1]==='3')) {
    return 'Maestro';
  };
};



/*
diner's club: 
length - 14
[1] 8 or 9

American Express
length - 15
[1] 4 or 7

Switch

49, 564, 633, 675

China UnionPay

622, 624, 625, 626, 628

Visa
length- 13, 16, 19
[0] 4

MasterCard
length 16
[0] 5
[1] 0

Discover
length: 16 or 19
[0] 6
[1] 0, 4 or 5

Maestro
50 or 63
*/


