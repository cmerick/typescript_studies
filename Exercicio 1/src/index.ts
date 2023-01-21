const spaceships = []

function addSpaceship(name: String, pilot: string, crewLimit: number) {

    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMisiion: false
    }

    spaceships.push(spaceship)
    alert(`Nave ${spaceship.name} registrada`)

}

function findSpaceship(name: String) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find((ship) => {
        return ship.name === name
    });
    return spaceship
}



function addCrewMember(member: string, spaceship: { name: string, crewLimit: number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado, nave cheia`)
    } else {
        spaceship.crew.push(member)
        alert(`${member} foi adiiconado a tripulação`)
    }


}

function toMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean }) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} Nave ja está em missão`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} Tripulação insuficiente`)
    }
    else {
        spaceship.inMission = true
        alert(`${spaceship.name} foi enviada para missão`)
    }
}

function registerSpaceship() {
    const name = prompt('qual o nome da nave?')
    const pilot = prompt('qual o nome do piloto')
    const crewLimit = Number(prompt(`qual o limite de tripulantes na ${name}`))

    const confirmation = confirm(`confirmar regitro de nave?\n\n
    nome: ${name}\npiloto: ${pilot}\nTripulação limite: ${crewLimit}`)

    if (confirmation) {
        addSpaceship(name, pilot, crewLimit)
    }
}

function addToCrew() {
    const member = prompt('Qual o nome do tripulante?')
    const spaceshipName = prompt('qual o nome da nave?')

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma inclusão de tripulante ${member} na nave ${spaceship.name}`)
        if (confirmation) {

            addCrewMember(member, spaceship)
        }
    }
}


function sendToMission() {
    const spaceshipName = prompt('qual o nome da nave')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Deseja enviar ${spaceship.name} em missão?`)

        if(confirmation){
            toMission(spaceship)
        }
    }

}


function listSpaceships() {
    let list = 'Naves Registradas:\n'
    spaceships.forEach((spaceship:{
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMisiion: boolean
    }) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão: ${spaceship.inMisiion ? 'Sim':'Não'}
        Tamanho máximo da tripulação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
        `
        spaceship.crew.forEach( member => {
            list += `       -${member}`
        })
    })

    alert(list)
}


//Menu opicional

/* let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      registerSpaceship()
      break
    case 2:
      addToCrew()
      break
    case 3:
      sendToMission()
      break
    case 4:
      listSpaceships()
      break
    case 5:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
} */




















//evitando tipagem
/*Tipos opicionais */
/* function sendSpaceship(spaceship:{pilot:string, copilot?:string }){
//... o "?" no recebimento da função se refere a um atributo opcional


}

sendSpaceship({pilot:"hansolo", copilot:"chewbacca"})

sendSpaceship({pilot:'luke'}) */

/*Tipo unknown e any */

/* let input: unknown

let input2: any //este desabilita o typescript e ignora até as regras de
                // outras variáveis, não é recomendado atribuir esse formato a não
                //ser que seja última opção

input ='teste'
input = 20

let text: string */
//text  não pode receber input pois text especifica que deve ser do tipo string
//e quando se passa uma variável pelo unknown não se pode saber de qual tipo virá
//impedindo que o text receba input porém a operação contrária é possível.

/*
function verification(test:any){
    if(test){

    }else {
        let _check: never
        let text= _check
        return text
    }
} */ //serve para avisar quando a função cai em um estado que nunca devria ter caido






//enums
/* enum Roles {
    ADMIN,
    USER
}

Roles.ADMIN */


/* function sendSpaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMisiion: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`)
    
    return spaceship
}

function accelerate (targetSpeed:number, spaceship: { name:string, speed:number}){
    if (spaceship.speed> targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}/ms...`)
    } else if(spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }
    else{
        alert(`mantendo velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('insira o nome da nave a ser enviada')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave')


const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt("inicie a velocidiade"))

accelerate(speed, currentShip) */