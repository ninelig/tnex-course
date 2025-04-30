const avengers = [
    { hero: 'Iron Man', budget: 5000 },
    { hero: 'Hulk', budget: 2000 }
  ];
  
  const totalBudget = avengers.reduce((sum, avenger) => sum + avenger.budget, 0);
  
  console.log(`Total budget: ${totalBudget}`);