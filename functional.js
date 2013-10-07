//** rewrite */

// var victim = {};

// var getVictimInfo = function() {
//  victim.name = prompt("Please enter your name:");
//  victim.phone = prompt("Please enter your phone number:");
//  victim.street = prompt("Please enter your street:");
// };

// alert('Thank you! Victim entered: \n' + 
//  victim.name + ", " + 
//  victim.phone + ", " + 
//  victim.street);



function getVictimInfo() {
 var victim = {};
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
 output(victim.name, victim.phone,victim.street);
};

function output(name,phone,street) {
  alert('Thank you! Victim entered: \n' + 
  name + ", " + 
  phone + ", " + 
  street);
}



//** Run */
getVictimInfo()
