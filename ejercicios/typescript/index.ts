// console.log('Hello TypeScript')

// function add(a: number, b: number){
//     console.log(a+b);
//     return a + b;
// }

// const mSum = add(6,7);

//Bolean
let muted: boolean = true;
muted = false;
//Number
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;
//String
let nombre: string = 'Richard';
let saludo: string = 'Saludo';
//Arreglos, los arreglos pueden ser de un solo tipo, mezclados u organizados
let people: string[] = [];
people = ["Isabel", "Jorge", "Raul"];

let peopleNumbers: Array< string | number > = [];
peopleNumbers.push("Ricardo");
peopleNumbers.push(4);
//Enum
enum Color{
    Rojo, Verde, Azul
};
let colorFavorito: Color = Color.Azul;
enum mColor{
    Rojo = "Rojo", Verde = "Verde", Azul = "Azul"
};
let mcolorFavorito: mColor = mColor.Azul;
//Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };
//Object
let someObject: object = { type: "Wildcard" };