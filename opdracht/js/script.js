strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str){
    outputArray = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){
    var outputString = "";
    for (let i =0; i <arr.length;i++){
        outputString+=arr[i];
    }
    //TODO: opdracht 1
    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    //TODO: opdracht 2
    for(let i=0;i<intDiv;i++)
        outputString+=(positiesNaarString(strCodeword));
    for(i=0;i<intMod;i++)
        outputString+=(positiesNaarString(strCodeword[i]));

    console.log("Codeword full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);
    outputString="";
    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 26){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
    }

    for(let i=0;i<outputArray.length;i++)
    outputString+=(strAlfabet[outputArray[i]])
    
    console.log(outputString);


    console.log("versleuteld bericht: " + outputString);
    document.querySelector("#output").value = outputString;
    strCodewordFull = [];

}

function ontsleutel(){
    strInput = document.querySelector("#output").value; 
    strCodeword = document.querySelector("#codeword").value;  
    
    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);

    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);
    outputString="";
    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] - arrCodewordPosities[i] < 0){
            outputArray.push((arrInputPosities[i] - arrCodewordPosities[i])+26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] - arrCodewordPosities[i]);
        }
    }

    for(let i=0;i<outputArray.length;i++)
        outputString+=(strAlfabet[outputArray[i]])
    
    console.log(outputString);


    console.log("ontsleuteld bericht: " + outputString);
    document.querySelector("#input").value = outputString;
}