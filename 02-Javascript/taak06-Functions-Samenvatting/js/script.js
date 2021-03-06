var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

function geefAntwoord(antwoord){
    if(antwoord=="hoger"){
        if(getal1>getal2){score++;  document.querySelector("body").style.backgroundColor = "Green";};
        if(getal1<getal2){score--;  document.querySelector("body").style.backgroundColor = "Red";};
    }
    if(antwoord=="lager"){
        if(getal1>getal2){score--; document.querySelector("body").style.backgroundColor = "Red";};
        if(getal1<getal2){score++; document.querySelector("body").style.backgroundColor = "Green";}
    }
    document.querySelector(".score").innerHTML=score;
    getal1 = showRandomNumber1();
    getal2 = showRandomNumber2();
}

getal1 = showRandomNumber1();
getal2 = showRandomNumber2();
