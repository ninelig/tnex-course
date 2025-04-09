
function batman() {
    return function() {
        return "I am Batman!";
    }
}

const batmanIdentity = batman();
console.log(batmanIdentity()); 

