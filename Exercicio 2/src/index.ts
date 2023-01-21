/* //omit e pick

interface GithubUserResponse {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: boolean
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
  }
  
  interface GithubRepoResponse {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: Omit<GithubUserResponse, 'name' | 'company' | 'blog' | 'location' | 'email' | 'hireable' | 'bio' | 'twitter_username' | 'public_repos' | 'public_gists' | 'followers' | 'following' | 'created_at' | 'updated_at' >
        /* {
      login: string
      id: number
      node_id: string
      avatar_url: string
      gravatar_id: string
      url: string
      html_url: string
      followers_url: string
      following_url: string
      gists_url: string
      starred_url: string
      subscriptions_url: string
      organizations_url: string
      repos_url: string
      events_url: string
      received_events_url: string
      type: string
      site_admin: boolean
    } 
    html_url: string
    description: string
    fork: boolean
    url: string
    forks_url: string
    keys_url: string
    collaborators_url: string
    teams_url: string
    hooks_url: string
    issue_events_url: string
    events_url: string
    assignees_url: string
    branches_url: string
    tags_url: string
    blobs_url: string
    git_tags_url: string
    git_refs_url: string
    trees_url: string
    statuses_url: string
    languages_url: string
    stargazers_url: string
    contributors_url: string
    subscribers_url: string
    subscription_url: string
    commits_url: string
    git_commits_url: string
    comments_url: string
    issue_comment_url: string
    contents_url: string
    compare_url: string
    merges_url: string
    archive_url: string
    downloads_url: string
    issues_url: string
    pulls_url: string
    milestones_url: string
    notifications_url: string
    labels_url: string
    releases_url: string
    deployments_url: string
    created_at: string
    updated_at: string
    pushed_at: string
    git_url: string
    ssh_url: string
    clone_url: string
    svn_url: string
    homepage: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    forks_count: number
    mirror_url: string
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license: string
    allow_forking: boolean
    is_template: boolean
    topics: string[]
    visibility: string
    forks: number
    open_issues: number
    watchers: number
    default_branch: string
  }


//uso do omit
  /* let repo:GithubRepoResponse

  repo.owner. 
//uso do omit


//uso do pick

type LocalGitHubUser = Pick<GithubUserResponse, 'name'| 'id'| 'company'| 'login'>

type LocalGitHubRepo = Pick<GithubRepoResponse, 'stargazers_count'| 'name'>

let localUser: LocalGitHubUser
let LocalRepo: LocalGitHubRepo

localUser.company = ''
LocalRepo.stargazers_count
//uso do pick
*/
 
/* //Exercicio Criando Interfaces

interface GitAccountData {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: 'NotFound'
}

interface GitRepoResponse {
name: string
descripyion: string
fork: boolean
stargazers_count: number
}

const users: GitAccountData[] = []



async function getGitAccountData(userName:string) {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const user:GitAccountData = await response.json();
        if(user.message) alert('NotFound')
        users.push(user);
        alert(`User: ${user.login} foi salvo`)
    
}

function setUserData() {
    let userName = prompt('Qual o nome do usuário')
    getGitAccountData(userName)
}

function showUserData(name:string) {
    const user = users.find(user => user.name === name)

    alert(
        `O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
      )
}

function showUserList() {
    let message = "Users:\n"

    users.forEach(user => {
        message +=`\n${user.name}`
    })

    alert(message)
}

function someOfRepos() {
    const reposSome = users.reduce((accumulator, user) => (accumulator + user.public_repos), 0)
    alert(`Toltal Repositories = ${reposSome}`)
}

function showTopFive() {
    const topFive = users.slice().sort((a,b) => b.public_repos - a.public_repos).slice(0,5)
    let message = 'Top Five:\n'

    topFive.forEach((user,index) => {
        message += `\n${index+1} = ${user.login}`
    })
    alert(message)
}

function showUser() {
    const name = prompt("qual o nome do usuário?")
    showUserData(name)
}

async function main() {
    await getGitAccountData('isaacpontes')
    await getGitAccountData('julianaconde')
    await getGitAccountData('pcaldass')
    await getGitAccountData('lucasqueirogaa')
    await getGitAccountData('frans203')
    await getGitAccountData('LeDragoX')
}

main()

 */





//interfaces

//interface pode ser duplicada  e se tornam integradas

/* interface CelestialBody {
    name: string;
    mass: number;
}

interface Star extends CelestialBody {
    age: number;
    planets: Planet[];
}

interface Planet extends CelestialBody {
    name:string;
    population: number;
    createatellite: (name:string) => void
}

let sun: Star


sun.name = 'Sol'
sun.mass = 1.989*(10**30)
sun.age = 4.603 * (10**9)
sun.planets = []


class MilkWayPlanet implements Planet {
    name: string;
    mass: number;
    population: number;

    constructor(name:string, mass:number, population:number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createatellite: (name: string) => {
        //....
    }
}
 */


//aplicação de types
/* type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites: string[]

}

const planets: Planet[] = []


function registerPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`Planeta ${name} registrado.`)
}


function searchPlanet(name: string) {
    //procura pelo paneta no array

    const planet = planets.find(planet => planet.name === name)
    return planet ?? false
}

function attPlanetSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation
    alert(`A situação do planeta ${planet.name} foi atualizada para '${situation}.'`)
}

function addSatteliteToPlanet(name: string, planet: Planet) {
    //adiciona satellite aos planetas
    planet.satellites.push(name)
    alert(`Satelilte '${name}' foi adicionado ao planeta '${planet.name}'`)
}

function removeSatelliteFromPlanet(name: string, planet: Planet) {
    //remove satelite do planeta
    planet.satellites = planet.satellites.filter(satellite => satellite !== name) //nessa forma ele remove apenas o nome especificado no filter

}

function validatePlanetSituation() {
    //valida a situação do planeta
    let situation: PlanetSituation

    const situationInput = prompt('informe a situação do planet:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

    if (situationInput === null || situationInput > "4" || situationInput < "1") alert('Opção invalida!')
    if (situationInput === "1") return situation = 'Habitado'
    if (situationInput === "2") return situation = 'Habitável'
    if (situationInput === "3") return situation = 'Inabitável'
    if (situationInput === "4") return situation = 'Inexplorado'
}

function validatePlanet(callback: (planet: Planet) => void) {
    //checa se o planeta esta na lista
    const planetName = prompt('Informe o nome do planeta')
    const planet = searchPlanet(planetName)

    if (planet) {
        callback(planet)
    } else {
        alert('Planeta não encontrado! Retornando ao menu...')
    }
}

function firstMenuOption() {
    const name = prompt('Qual o nome do planeta?')

    const coordA = Number(prompt('Informe a primeira coordenada:'))
    const coordB = Number(prompt('Informe a segunda coordenada:'))
    const coordC = Number(prompt('Informe a terceira coordenada:'))
    const coordD = Number(prompt('Informe a quarta coordenada:'))

    //Aqui usamos o validatesituation para manter o coidog organizado

    const situation = validatePlanetSituation()

    const confirmation = confirm(`Confima registro do planeta ${name}
    \n\nCoordenadas: ${coordA},${coordB} / ${coordC},${coordD}
    \nSituação: ${situation}`)
    if (confirmation) registerPlanet(name, [coordA, coordB, coordC, coordD], situation)

}

function secondMenuOption() {
    //
    validatePlanet(planet => {
        const situation = validatePlanetSituation()
        attPlanetSituation(situation, planet)
    })
}

function thirdMenuOption() {
    validatePlanet(planet => {
        const satellite = prompt('Nome do satélite a ser adicionado')
        addSatteliteToPlanet(satellite, planet)
    })
}

function fourthMenuOption() {
    validatePlanet(planet => {
        const satelite = prompt('Nome do satelite a ser removido')
        removeSatelliteFromPlanet(satelite, planet)
    })
}

function fifthMenuOption() {
    let listUl = document.getElementById("lista")
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates
        let listLi
        let createLi = document.createElement('li')
        listLi = createLi
        listLi.innerText = `Nome: ${planet.name}
                        Coordenadas: (${a},${b}/${c},${d})
                        Situação: ${planet.situation}
                        Satélites: ${planet.satellites.length}
                              ${planet.satellites.join('\n. ')}
                        `
        listUl.appendChild(listLi)
    })



}

 */





//Criação de tipos

/* let literal: "hello, world"
let pi: 3.14159

/* literal = "hi world" //não pode ser atriubuido ao tipo literal
pi = 3 */

//const teste = 5  // também é considerada literal pelo typescript


//let option: 'yes' | "no" // pode delimitar até mesmo tipos de atributos dentro da variável

/*
type Planet = "Yes" | 'No' // isso é um ALIAS

let planet: Planet

let homePlanet: Planet

function cheackHomePlanet(planet: Planet) {
    if(planet === 'Yes'){
        console.log("Estamos na terra")
    }
} */
// type function
/* type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback){
    let name = 'Erick' //aceita somente string
    
    callbackfn(name)
} */