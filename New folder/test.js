/*  */

// check if sum == k

var n = [1, 2, 4, 5];
var k = 6;

// getting first integer of expression
for (var i = 0; i < n.length; i++) {
    // getting second integer of expression
     for (var j = (i+1); j < (n.length); j++) {
        if (n[i] + n[j] == k) {
            console.log("yes. " + n[i] + " " + n[j] + " = " + k);
        }
        else {
            console.log("no. " + n[i] + " " + n[j] + " = " + k);
        }
     }
}