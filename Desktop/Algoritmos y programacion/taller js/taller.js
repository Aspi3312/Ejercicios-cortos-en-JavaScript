// Ejercicio 1.1
var nombre = "Andres";
console.log("Nombre inicial (var):", nombre);
nombre = "Isabela";
console.log("Nombre reasignado (var):", nombre);

// Ejercicio 1.2
const apellido = "Pérez";
console.log("Apellido (const):", apellido);

// Intento de reasignación (esto lanzará un error en la consola)
//apellido = "Gómez";// apellido = "Gómez"; 



// Ejercicio 1.3
if (false) {
  let edad = 25;
}
//console.log (edad)

// Explicación: Lanza 'ReferenceError: edad is not defined'. 
// Esto sucede porque las variables creadas con 'let' tienen alcance de bloque (block scope) 
// y solo existen dentro de las llaves {} donde fueron declaradas.

//2.1
let texto = "Hola JavaScript";
let numero = 42;
let esVerdadero = true;
let nulo = null;
let indefinido = undefined;

console.log(typeof texto);       // "string"
console.log(typeof numero);      // "number"
console.log(typeof esVerdadero); // "boolean"
console.log(typeof nulo);        // "object" (comportamiento propio de JS)
console.log(typeof indefinido);  // "undefined"
//2.2
let persona = { nombre: "Andrés", edad: 25 };
let hobbies = ["jugartennis", "Programar", "montarbicicleta"];

console.log(typeof persona); // "object"
console.log(typeof hobbies); //

// Ejercicio 3.1 - Conversión implícita
let numero1 = 10;
let numero2 = "5";

console.log(numero1 + numero2); 
// Resultado: "105"
// Al usar '+', JS prefiere concatenar los textos porque numero2 es un string.

console.log(numero1 * numero2); 
// Resultado: 50
// usando '*', JS sabe que no se puede multiplicar texto, así que convierte "5" a número.

let numAString = String(25);
let strANumero = Number("100");
let boolVacio = Boolean("");
let boolTexto = Boolean("hola");

console.log(numAString, typeof numAString); // Muestra: "25" "string"
console.log(strANumero, typeof strANumero); // Muestra: 100 "number"
console.log(boolVacio);                     // Muestra: false
console.log(boolTexto);                     // Muestra: true

// Ejercicio 4.1
console.log(10 == "10");  // true  -> Compara solo el valor
console.log(10 === "10"); // false -> Compara valor y tipo de dato

// Ejercicio 4.2
let numeroEval = 8;
if (numeroEval % 2 === 0) {
  console.log(numeroEval + " es par");
} else {
  console.log(numeroEval + " es impar");
}

// Ejercicio 4.3
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Ejercicio 4.4
try {
  throw new Error("Este es un error.");
} catch (error) {
  console.log("Error capturado:", error.message);
}

// Ejercicio 5.1
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(6, 4));

// Ejercicio 5.2
const multiplicarArrow = (a, b) => a * b;
console.log(multiplicarArrow(6, 4));

// Ejercicio 5.3
const saludar = () => "¡Hola a todos!";
console.log(saludar());

// Ejercicio 6.1
let vGlobal = "Variable Global";

function probarScope() {
  let vLocal = "Variable Local";
  console.log("Dentro de la función:");
  console.log(vGlobal); // Funciona
  console.log(vLocal);  // Funciona
}

probarScope();

console.log("Fuera de la función:");
console.log(vGlobal); // Funciona
// console.log(vLocal); // Lanza ReferenceError porque vLocal solo existe dentro del scope de la función.


// Ejercicio 6.2
let coche = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log("La marca es: " + this.marca);
  }
};

coche.mostrarMarca();

// Ejercicio 7.1 (Mutables)
let frutas = ["Manzana", "Banana"];
frutas.push("Naranja");
console.log("Con push:", frutas);

frutas.pop();
console.log("Con pop:", frutas);

// Ejercicio 7.2 (Inmutables)
const numeros = [1, 2, 3];
const duplicados = numeros.map(n => n * 2);
const mayoresA1 = numeros.filter(n => n > 1);

console.log("map (*2):", duplicados);
console.log("filter (>1):", mayoresA1);

// Ejercicio 7.3 (Iteración)
frutas.forEach(fruta => console.log("Fruta:", fruta));

const frutaEncontrada = frutas.find(fruta => fruta === "Banana");
console.log("find Banana:", frutaEncontrada);

const indiceManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log("índice Manzana:", indiceManzana);

// Ejercicio 8.1 (Métodos en Objetos)
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  mostrarInfo() {
    console.log(`"${this.titulo}" fue escrito por ${this.autor}`);
  }
};
libro.mostrarInfo();

// Ejercicio 8.2 (Clases)
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const miMascota = new Animal("Miño");
console.log(miMascota.saludar());

// Ejercicio 8.3 (Herencia de Clases)
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
}

const miPerro = new Perro("Firulais", "Labrador");
console.log(`${miPerro.saludar()} y soy un ${miPerro.raza}`);