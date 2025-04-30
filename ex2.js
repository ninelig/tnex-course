const pokemons = [
    { name: 'Pikachu', CP: 320 },
    { name: 'Charizard', CP: 900 }
  ];
  
  const strongPokemons = pokemons.filter(pokemon => pokemon.CP > 500);
  
  console.log(strongPokemons);