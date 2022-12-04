import { Player } from "../Player";
import { CharacterClass } from "./CharacterClass";

export class Rogue extends CharacterClass {
    
    constructor() {
        super();

        this.hp = 100;
        this.abilities = {
            'escapeSpell': this.escapeSpell,
        }
    }

    public useAttack(target: Player): void {
        let targetHp: number = target.getHp() - 25;
        target.setHp(targetHp);
        console.log('Rogue has attacked');
    }

    private escapeSpell(target: Player) {
        console.log('Used escapeSpell');
    }
}