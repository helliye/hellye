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

// let rows = 7;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let m = 1; m <= 7; m++) {
  
//     //halghe birooni
//       if (n == 1 || n == 7) pattern += "*"; //radif
//         //halghe dakheli
//         else {
//          if (m == 1 || m == 5 || m== 7  ) { // sotoon
//             pattern += "*";
//          } else {
//           pattern += " ";
//         }
//      }
//     }
//   pattern += "\n";
// }
// console.log(pattern);

///////////////////////////////////////////

// let rows = 7;
// let pattern = "";

// for (let n = 1; n <= 1; n++) {
//    for (let m = 0 ; m < rows ; m++) { // nashod az sotoone 2 shoroo konam
//   pattern += "*";
//    }
//    pattern += "\n"; }
// // satre 2
// for (let n = 1; n <= rows - 6; n++) {
//   for (let m = 1; m <= rows ; m++) {
//    if (m == 1 || m == 7) pattern += "*     ";
//     } 
//     pattern += "\n"; }

// // satre 3
// for (let n = 3; n <= 3 ; n++) {
//   for (let m = 1; m <= rows ; m++) {
//    if (m == 1 || m == 3 || m == 5 || m == 7) pattern += "* ";
//     } pattern += "\n";}

// // satre 4
// for (let n = 4; n <= 4 ; n++) {
//   for (let m = 1; m <= rows ; m++) {
//    if (m == 1 || m == 4 || m == 7) pattern += "*  ";
//     } pattern += "\n";}

// // satre 5 // nemidoonam // chera mire roo 8!!!?
//     for (let n = 5; n <= 5 ; n++) {
//       for (let m = 1; m <= rows  ; m++) {
//         // emrooz 03.06 b m==5 taghir dadam va jash dorost shod// cera? nemidoonam!
//         if (m == 1 || m == 5 ) pattern += "*";
//         else {
//         if (m == 3) {
//            pattern += "***";
//         } else {
//            pattern += " ";  
//         }  
//       }
//       } pattern += "\n";}

//  // satre 6 // copy 2
//       for (let n = 6; n <= rows - 1 ; n++) {
//         for (let m = 1; m <= rows ; m++) {
//          if (m == 1 || m == 7) pattern += "*     ";
//           } 
//           pattern += "\n"; }
// // satre 7 copy 1 /// bedone kasre aval , akhari ):
 
// for (let n = 7; n <= 7; n++) {
//   for (let m = 0 ; m < rows ; m++) { // nashod az sotoone 2 shoroo konam
//  pattern += "*";
//   }
//   pattern += "\n"; }*/

// console.log(pattern);


////////// PROMISE CHAINING ///////////
function start (date) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ({ date: date , start: "Hello"});
    }, 2000);
  });  
}
function by (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ({ time: time , by: "Goodbye"});
    }, 1000);
  });  
}

// function left (end)) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve ({ end: end , left: "End of message"});
//     }, 3000);
//   });  
// }

start ()
 .then(date => {
       console.log("date:", date);
       return by(date); //// inja TIME gozashtam khata dad
   })
     .then(time => {
       console.log("time:", time);
   })
     .catch(error => {
     console.error("Error:", error);
   });



   ///////////////////////////////

  
