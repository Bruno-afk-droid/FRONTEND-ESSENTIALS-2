topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = ["","",""];



//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

function KN(){
    document.querySelector("kiesfilm-button").innerHTML = "Kies film voor plek 2";
}

function kiesFilm(){
    let a = prompt("kies Favoriete Film?");
    let i=0; while(eigenTopFilms[i]!="")i++;
    eigenTopFilms[i]=topFilms[a-1]; 
    for(i = 0; i < eigenTopFilms.length; i++){
        document.querySelector(".eigen-film" + (i+1)).innerHTML = eigenTopFilms[i];
        document.querySelector("kiesfilm-button").innerHTML = "";
    }
}