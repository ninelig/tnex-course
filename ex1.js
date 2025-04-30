let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getInfo: function() {
      return `${this.brand} ${this.model}, ${this.year}`;
    }
  };
  
console.log("Brand:", car.brand); 
car.year = 2023;


delete car.model;


console.log(car);


console.log(car.getInfo());