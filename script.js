function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");

}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You have rolled a " + dice + "!");

}

rollDice();

function jobSearch() {
    let month = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    month += dice;
    alert("It will take you " + month + " months to get your first job as a developer.");

}
jobSearch();

/*function comfortLevel(html, css, js){
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You are a pro!");
    } else if (average >=4) {
        console.log("Don't worry, you're nearly there!");
    } else {
        console.log("If you keep trying you will get there!");
    }
    
}

comfortLevel(8, 7, 3);*/

function darkMode() {
    document.body.style.backgroundColor  = 'black';
    document.body.style.color  = 'white';
    document.body.style.backgroundImage  = 'none';
    document.getElementById("#").style.color = 'white';

}

