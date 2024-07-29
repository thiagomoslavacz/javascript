// OBJETOS
// let car = "fusca";

// marca, modelo, ano e placa são propriedades dentro do objeto car e dentro das propriedades são seus valores.
const car = {
  marca: "fusca",
  modelo: "ka",
  ano: 2015,
  placa: "ABC-1234",
  buzina: function () {
    alert("Biiiii!");
  },
  completo: function () {
    return "A marca é: " + this.marca + ", e o modelo é: " + this.modelo + ".";
  },
};

// console.log(car["marca"]); // or .marca
console.log(car.completo());
