class Car {
    constructor(brand, model, type) {
      this.brand = brand;
      this.model = model;
      this.type = type;
    }
  
    description() {
      return `${this.type} – ${this.brand} ${this.model}`;
    }
  
    render() {
      const p = document.createElement("p");
      p.textContent = this.description();
      document.getElementById("carList").appendChild(p);
    }
  }
  
  class Sedan extends Car {
    constructor() {
      super("Toyota", "Corolla", "Sedan");
    }
  }
  
  class SUV extends Car {
    constructor() {
      super("Ford", "Explorer", "SUV");
    }
  }
  
  function addSedan() {
    const sedan = new Sedan();
    sedan.render();
  }
  
  function addSUV() {
    const suv = new SUV();
    suv.render();
  }