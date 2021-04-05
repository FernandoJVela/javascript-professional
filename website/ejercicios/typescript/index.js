// console.log('Hello TypeScript')
// function add(a: number, b: number){
//     console.log(a+b);
//     return a + b;
// }
// const mSum = add(6,7);
//Bolean
var muted = true;
muted = false;
//Number
var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador;
//String
var nombre = 'Richard';
var saludo = 'Saludo';
//Arreglos, los arreglos pueden ser de un solo tipo, mezclados u organizados
var people = [];
people = ["Isabel", "Jorge", "Raul"];
var peopleNumbers = [];
peopleNumbers.push("Ricardo");
peopleNumbers.push(4);
//Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
;
var colorFavorito = Color.Azul;
var mColor;
(function (mColor) {
    mColor["Rojo"] = "Rojo";
    mColor["Verde"] = "Verde";
    mColor["Azul"] = "Azul";
})(mColor || (mColor = {}));
;
var mcolorFavorito = mColor.Azul;
//Any
var comodin = "Joker";
comodin = { type: "Wildcard" };
//Object
var someObject = { type: "Wildcard" };
//Funciones
function add(a, b) {
    return a + b;
}
var sum = add(3, 4);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourplussix = addFour(6);
function fullName(firstName, secondName, lastname) {
    if (secondName === void 0) { secondName = "Jose"; }
    return firstName + " " + secondName + " " + lastname;
}
var mName = fullName("Fernando", "Vela");
var mName2 = fullName("Fernando"); //El signo ? hace que el parámetro de entrada sea opcional
//Interfaces
var Color2;
(function (Color2) {
    Color2[Color2["Rojo"] = 0] = "Rojo";
    Color2[Color2["Verde"] = 1] = "Verde";
    Color2[Color2["Azul"] = 2] = "Azul";
})(Color2 || (Color2 = {}));
;
var rect = {
    ancho: 4,
    alto: 6,
    color: Color2.Azul
};
function areaRect(r) {
    return r.alto * r.ancho;
}
var mArea = areaRect(rect);
rect.toString = function () {
    return this.color ? "Un rect\u00E1ngulo " + this.color : "Un rect\u00E1ngulo";
};
