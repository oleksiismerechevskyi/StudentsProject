import { Player } from "../Player";
import { CharacterClass } from "./CharacterClass";

export class Mage extends CharacterClass {

    constructor() {
        super();

        this.hp = 80;
        this.abilities = {
            'counterSpell': this.counterSpell
        }
    }

    public useAttack(target: Player): void {
        let targetHp: number = target.getHp() - 100;
        target.setHp(targetHp);
        console.log('Mage has attacked');
    }

    private counterSpell(target: Player) {
        console.log('You cannot cast any spell!');
    }

}