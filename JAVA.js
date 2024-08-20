// men OR women
/* if
welcome man 
OR 
welcome women
*/
// import { Practice } from 'module.js';
// ba comment import hal nashod 1

/*
function greetUser(gender) {
  if (gender === "male") {
    console.log("Welcome, sir!");
  } else if (gender === "female") {
    console.log("Welcome, madam!");
  } 
}
 greetUser ("male");
 greetUser ("female");

 */
/////////// Practice3 ////////
// list of number from 1 to 10 , print even or odd ///

/* function oddOReven (from , to) {

for (let x = from; x <= to; x++) {

  if (0 == x%2) {
      console.log(x + " is even");
  }  else {
      console.log(x + " is odd");
  }
} 
}
 oddOReven(50 , 100);*/

////////////////////////////////////////////
// 8 setarei / 7 radif & 7 sotoon//

let rows = 7;
let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let m = 1; m <= 7; m++) {
    //halghe birooni
      if (n == 1 || n == 7) pattern += "*"; //radif
        //halghe dakheli
        else {
         if (m == 1 || m == 7 ) { // sotoon
            pattern += "*";
         } else {
          pattern += " ";
        }
     }
/*
 for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <= 7; k++) {
  if (i == 3 || i == 4) pattern += "* ";
  else {
    if (k == 1 || k == 4) { // sotoon
       pattern += "* ";
    } else {
     pattern += " ";
   }
*/
    }
  pattern += "\n";
}


console.log(pattern);