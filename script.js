let images = [
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg"
];

let dice = document.querySelectorAll("img");

function roll () {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
       dice.forEach(function(die){
           die.classList.remove("shake");
       });
       let dieOneValue = Math.floor(Math.random()*6);
       let dieTwoValue = Math.floor(Math.random()*6);
       console.log(dieOneValue, dieTwoValue);
       document.querySelector("#die-1").setAttribute
       ("src", images[dieOneValue]);
       document.querySelector("#die-2").setAttribute
       ("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "your roll is " + ((dieOneValue +1 + 
            dieTwoValue +1));
    },
    1000
);
}
roll();