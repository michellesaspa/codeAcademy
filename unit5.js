function unit5() { 
var user = prompt("Sansa, Cersei, Margaery and Melisandre...who do you choose?").toLowerCase();
var dead = true;
var nasty = true;

switch(user) {
    case 'Sansa':
        
        if(dead && nasty) {
            console.log("yo she dead and nasty"); 
        } else {
            console.log("You chose Gingerpuss");
        }
        break;
    case 'Cersei':
        console.log("LoL she does that incest thing");
        break;
    case 'Margaery':
        if(dead || nasty) {
            console.log("yo she dead and nasty"); 
        } else {
        console.log("That is so fucked she ded");
        }
        break;
    default: 
    console.log("lol reekt shes soooooo fucking old");
};
};




