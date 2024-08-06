//++++++++++++++++++++++++//
/* good morning 
& good afternoon 
& good night */

/*function practice1 (HOURS) {
    return (goodmorning , goodafternoon , goodnight)
}

let HOURS = 24;
let HOURS = (1,2,3,4,..,24);

if(HOURS >= 4 && HOURS <= 12) {
    console.log ("Good morning");
} else if (HOURS >= 12 && HOURS <= 17){
    console.log ("Good afternoon");
} else if (HOURS >= 17 && HOURS < 24) {
    console.log ("Good night");
}
*/
//// injs 24 tarif kardam faghat good night goft//



function myFunction() {
    var greeting;
    var time = new Date().getHours();

    if (time < 10) {
        greeting = "Good morning";

    } else if (time < 17) {
        greeting = "Good afternoon";
    } else if (time < 24) {

        greeting = "Good night";
    }