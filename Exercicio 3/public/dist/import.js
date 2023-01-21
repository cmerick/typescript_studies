import * as _ from "lodash";
let xwing = {
    name: 'X-Wing',
    pilot: 'Luke',
    speed: 50,
    weapons: 4
};
console.log(_.camelCase(xwing.pilot));
export default xwing;
