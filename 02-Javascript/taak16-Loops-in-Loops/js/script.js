var arrProductPrijs = [5,10,20,50,100];
var arrProductKorting = [0.95, 0.85, 0.98, 1.21];
var totaal = 0;

function rondaf(getal, aantalplekkenachterkomma){
    const x = Math.pow(10, aantalplekkenachterkomma);
    return Math.round(getal * x)/x;
}
var nr=0;
for (let i = 0; i < arrProductPrijs.length; i++) {
    for (let j = 0; j < arrProductKorting.length; j++) {    
        console.log("Product "+(nr)+" : "+rondaf(arrProductPrijs[i] * arrProductKorting[j],2))
        totaal+=rondaf(arrProductPrijs[i] * arrProductKorting[j],2);
        nr++;
    }
    console.log("---");
}
console.log("Totaal: "+totaal);