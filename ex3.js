
let student = {
    name: "John",
    age: 21,
    grades: [88, 92, 79]
  };
  
  
  console.log("Keys:", Object.keys(student));

  
  console.log("Values:", Object.values(student));


  console.log("Entries:");
  Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${Array.isArray(value) ? value.join(", ") : value}`);
  });
