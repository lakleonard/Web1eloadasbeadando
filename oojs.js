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
  
  // Leszármazott osztály: Sedan
  class Sedan extends Car {
    constructor() {
      super("Toyota", "Corolla", "Sedan");
    }
  }
  
  // Leszármazott osztály: SUV
  class SUV extends Car {
    constructor() {
      super("Ford", "Explorer", "SUV");
    }
  }
  
  // DOM eseménykezelők csak akkor, ha már betöltődött az oldal
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnSedan").addEventListener("click", () => {
      const sedan = new Sedan();
      sedan.render();
    });
  
    document.getElementById("btnSUV").addEventListener("click", () => {
      const suv = new SUV();
      suv.render();
    });
  });
