import { Spaceship } from "./export";
import * as _ from "lodash";
interface BattleSpeaceship extends Spaceship {
    weapons: number
}


let xwing:BattleSpeaceship = {
    name: 'X-Wing',
    pilot: 'Luke',
    speed: 50,
    weapons: 4
}

console.log(_.camelCase(xwing.pilot))

export default xwing;