import { Player } from "../Player";

export abstract class CharacterClass {
    public abilities: AbilitySet = {};
    public hp!: number;

    public useAbility(name: string): Function | Error {
        for(let abilityName in this.abilities) {
            if( name === abilityName ) {
                return this.abilities[name];
            }
        }
        
        return new Error('Spell isnt found');
    };

    abstract useAttack(target: Player): void;

}