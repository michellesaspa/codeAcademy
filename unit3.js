function unit3() { 
var text = "something michelle something something";
var myName = "michelle";
var hits = [];

for (var i = 0; i < text.length; i ++) 
{if(text[i] === 'm')
    {
    for(var j = i; j < i + myName.length; j ++)
        {hits.push(myName)}
    }
}

if(hits = 0) {
    console.log("Your name wasn't found!")}
else {
    console.log(hits);}
};




