var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('--------------------------------------------------');
            console.log(`Chamando o metodo ${key} com os parametros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log('--------------------------------------------------');
            console.log(`Chamando o metodo ${key} com os parametros: ${JSON.stringify(result)}`);
            return result;
        };
    };
}
/* function Decorator() {
    return function (target, key, descriptor){
    descriptor.value = function (value:number){
        console.log(`Calculando ${value} elevado ao quadrado`)
        return Math.pow(value, 2)
    }
    }
} */
class Planet {
    constructor(name) {
        this.name = name;
    }
    //@Decorator()
    calculate(value) {
        //...
        console.log(`Calculando ${value} vezes 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log()
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet('Terra');
const result = planet.calculate(5);
console.log(`Resultado = ${result}`);
planet.invertName();
