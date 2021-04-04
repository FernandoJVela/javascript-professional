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
//Funciones
function add(a: number, b: number):number{
    return a + b;
}
const sum: number =  add(3,4);
function createAdder(a: number): (number:number) => number {
    return function(b:number){
        return b + a;
    }
}
const addFour = createAdder(4);
const fourplussix: number = addFour(6);
function fullName(firstName: string, secondName: string = "Jose", lastname?: string):string{
    return `${firstName} ${secondName} ${lastname}`;
} 
const mName = fullName("Fernando", "Vela");
const mName2 = fullName("Fernando"); //El signo ? hace que el parámetro de entrada sea opcional
//Interfaces
enum Color2{
    Rojo, Verde, Azul
};
interface Rectangle {
    ancho: number
    alto: number
    color?: Color2
}
let rect: Rectangle = {
    ancho: 4,
    alto: 6,
    color: Color2.Azul
}
function areaRect(r: Rectangle): number{
    return r.alto * r.ancho;
}
let mArea = areaRect(rect);
rect.toString = function(){
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`
}