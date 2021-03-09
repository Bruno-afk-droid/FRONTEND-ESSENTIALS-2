function geefRandomGetalTerug(){                
    return Math.floor((Math.random() * 10) + 1);
}
for(let i=0;i<10;i++)
console.log(geefRandomGetalTerug());    