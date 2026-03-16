let tokens = 5;
alert("Welcome to the Totally Fair Gambling Game! You start with 5 tokens. Each game costs tokens to play. If you win, you can earn more tokens! You can also buy tokens or redeem them for cash! Good luck!");

function updateTokens() {
    document.getElementById("count").textContent = tokens;
}

function playGame() {

    if (tokens < 5) {
        alert("Not enough tokens!");
        return;
    }

    tokens -= 5;

    let win = Math.random() < 0.33;

    if (win) {
        tokens += 10;
        alert("Congratulations! You won 10 tokens!");
    } else {
        alert("Womp womp. You lost.");
    }

    updateTokens();
}
function buyTokens() {
    if (document.getElementById("creditCard").value === "") {
        alert("Please enter your credit card number!");
        return;
    } else if (document.getElementById("creditCard").value.length !== 16) {
        alert("Please enter a valid credit card number (16 Digits)!");
        return;
    } else {
        tokens += 5;
        alert("Thank you for your purchase! You have bought 5 tokens!");
    }
    updateTokens();
}
function redeemTokens() {
    if (document.getElementById("count").value === "0") {
        alert("You have no tokens!");
        return;
    } else if (document.getElementById("creditCard").value === "") {
        alert("Please enter your credit card number!");
        return;
    } else if (document.getElementById("creditCard").value.length !== 16) {
        alert("Please enter a valid credit card number (16 Digits)!");
        return;
    } else {
        tokens = 0;
        alert("Thank you for redeeming your tokens! You have redeemed all of your tokens into your bank account!");
    }
    updateTokens();
}
function playGame2() {

    if (tokens < 5) {
        alert("Not enough tokens!");
        return;
    } else if (document.getElementById("guess").value === "") {
        alert("Please enter a number between 1 and 10!");
        return;
    } else if (document.getElementById("guess").value < 1 || document.getElementById("guess").value > 10) {
        alert("Please enter a number between 1 and 10!");
        return;
    }
    
    tokens -= 5;

    let win2 = Math.random() < 0.1;

    if (win2) {
        tokens += 20;
        alert("Congratulations! You guessed my number! You won 20 tokens!");
    } else {
        alert("Womp womp. You lost.");
    }

    updateTokens();
}
function playGame3() {

    if (tokens < 2) {
        alert("Not enough tokens!");
        return;
    } 
    
    tokens -= 2;

    let win3 = Math.random() < 0.5;

    if (win3) {
        tokens += 4;
        alert("Congratulations! You guessed the side! You won 4 tokens!");
    } else {
        alert("Womp womp. You lost.");
    }

    updateTokens();
}
function spin() {

if (tokens < 2) {
        alert("Not enough tokens!");
        return;
    } 

    tokens -= 2;
    
    let symbols = ["🍒","🍋","⭐","💎","7️⃣"];

    let a = symbols[Math.floor(Math.random()*symbols.length)];
    let b = symbols[Math.floor(Math.random()*symbols.length)];
    let c = symbols[Math.floor(Math.random()*symbols.length)];

    if (a == b && b == c) {
        alert(a + " " + b + " " + c + "\nYou won thirty-five tokens!");
        tokens += 35;
    } else if (a == b || b == c || a == c) {
        alert(a + " " + b + " " + c + "\nHalf win: five tokens!");
        tokens += 5;
    } else {
        alert(a + " " + b + " " + c + "\nYou lost!");
    }

}


updateTokens();