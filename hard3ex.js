function removeDuplicates(arr) {
    let unique = [];
  
    for (let item of arr) {
      if (!unique.includes(item)) {
        unique.push(item);
      }
    }
  
   console.log(unique); 
  }

  removeDuplicates([7,7,8,8,9,1,0,10]);