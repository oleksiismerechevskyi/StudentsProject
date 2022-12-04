import { Player } from "../Player";
import { CharacterClass } from "./CharacterClass";

export class Warrior extends CharacterClass {

    constructor() {
        super();

        this.hp = 200;
        this.abilities = {
            'blockShield': this.blockShield,
        }
    }

    public useAttack(target: Player): void {
        let targetHp: number = target.getHp() - 50;
        target.setHp(targetHp);
        console.log('Warrior has attacked');
    }

    private blockShield(target: Player) {
        console.log('Used block shield');
    }


}