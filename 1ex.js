function compareAttack( pokemon1, attack1, pokemon2, attack2){
    if(attack1>attack2){
        return `${pokemon1} is stronger!`
    } 
    return `${pokemon2} is stronger!`
}


console.log(compareAttack("Pikachu", 55, "Charizard", 84));