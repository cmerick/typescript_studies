/* interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
  // Se deixássemos sem o tipo Ship desativaríamos
  // totalmente o typescript para esse argumento
  //para corrigir foi adicionado o tipo generico ShipType que correigiu o problema do reconhecimento do tipo da nave
  //porém para que o mesmo reconheça também as variásveis e necessário extender de forma obrigatória o
  //acesso as variáveis name e pilot que não são herdadas dos subtipos
  //extends {name:string, pilot:string}
  //uma melhoria pode ser simplesmente dizer que ele extende a classe Ship
  function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // A cópia funciona, porém a tipagem está incorreta
  // pois a ambas é atribuido o tipo Ship
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')


  //no react o uso de estados também aceita generics
//const [pilots, setPilots] = useState<PilotArray>([])

interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
  }
  
  // O tipo Ship não estaria correto aqui
  const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
  // Mas podemos explicitamente passar o tipo para a função
  // e agora temos o tipo EnemyShip atribuido corretamente
  const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')
  
  // Aqui temos um erro por conta do tipo Ship
  //enemyCopy.flag = 'Imperial'
  // Já aqui temos a propriedade opcional flag
  enemyCopy2.flag = 'Imperial'
 */



/* // é especialmete util qunado o tipo de entrada da função é relevante e influencia no comportamento

function first(array){
    return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined{
    return array[array.length  - 1]
}

const pilots = ['luke', 'briggs', 'wedge', 'han', 'lando']

const firstPilot = first(pilots)

const lastPilots = last(pilots)// se mudasse o array para numeros a função identificaria com number
 */