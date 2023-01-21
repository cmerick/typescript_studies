function Log() {
    return function(target,key,descriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function(...args:any[]) {
            console.log('--------------------------------------------------')
            console.log(`Chamando o metodo ${key} com os parametros: ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this, args)
            console.log('--------------------------------------------------')
            console.log(`Chamando o metodo ${key} com os parametros: ${JSON.stringify(result)}`)

            return result
        }
    }
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
    name:string

    constructor(name:string) {
        this.name = name
    }

    //@Decorator()
    @Log()
    calculate(value:number) {
        //...
        console.log(`Calculando ${value} vezes 2`)
        return value * 2
    }

    @Log()
    invertName(){
        return this.name.split('').reverse().join('')
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`Resultado = ${result}`)


planet.invertName()

// é possivel passar parametros para os decorators
//alguns exemplos de casos onde se usa os decorators  é com angular ou bibliotecas derivadas de typescript
//