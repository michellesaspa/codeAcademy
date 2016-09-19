var friends = new Object(); 
friends.bill = {
    firstName: "Bill",
    lastName: "Gayts",
    number: "696969696969",
    address: ['One Microsoft Way','Redmond','WA','98052']
    };

friends.steve = {
    firstName: "Steve",
    lastName: "Gayts",
    number: "696969696969",
    address: ['One Microsoft Way','Redmond','WA','98052']
    };

var list = function(parameter) {
    for (var firstName in friends) { 
        console.log(firstName)
    }
};

var search = function(name) {
    for (var firstName in friends) { 
        if(friends[firstName].firstName === name) {
            console.log(friends[firstName]);
            return friends[firstName];
        } else { 
        }
    }
};