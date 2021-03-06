## CLIENT6: Functional Short Answer

### Skills

*   Understanding<li>Scope
*   Pure Functions
*   Side Effects
*   Functional Progrmaming

### Resources

*   [Expressive Functional Programming (presentation)](slid.es/rainelourie/expressive-functional-javascript/fullscreen)

### Questions

1.  Rewrite the pluralize function using the ternary operator:

        var pluralize = function (word, number) {
     if(number === 1) {
      return word;
     }
     else {
      return word + "s";
     }
    };
    `</pre>
2.  The first step in functional programming is to write as much
    of your code in pure functions as possible. After that, you can    make your functions more 'functional' still by not letting them    rely on global variables; instead pass all needed variables as    arguments. This makes your function even more modular, just input/output.
    Rewrite the following code to be more functional:
    <pre>`var victim = {};
    var getVictimInfo = function() {
     victim.name = prompt("Please enter your name:");
     victim.phone = prompt("Please enter your phone number:");
     victim.street = prompt("Please enter your street:");
    };
    alert('Thank you! Victim entered: \n' +     victim.name + ", " +     victim.phone + ", " +     victim.street);

3.  Write a function which removes falsey values from an array. A falsey
value is one which evaluates to false when type coerced, which are the
following: `0, null, "" (empty string), undefined, NaN, false`.

Write two versions of the function: one that uses side effects and one
that is pure.