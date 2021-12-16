const findTheOldest = function(list) {
    let peopleAged = list.map((person) => { 
        if (typeof person.yearOfDeath == 'undefined') {
            person.age = new Date().getFullYear() - person.yearOfBirth
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth 
        }
        return person
    }) 
    

    peopleAged = peopleAged.sort((personA, personB) => {
       if (personA.age > personB.age) {
           return 1
       } else if (personA.age < personB.age) {
            return -1
       } else {
           return 0
       }
    })
    
    return peopleAged[peopleAged.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;