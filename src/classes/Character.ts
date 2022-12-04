import { CharacterClass } from "./CharacterClass/CharacterClass";

export abstract class Character {
    protected characterClass: CharacterClass;
    protected hp: number = 0;
    public isDead: boolean = false;

    constructor(characterClass: CharacterClass) {
        this.characterClass = characterClass;
        this.hp = characterClass.hp;
    }

    public getHp(): number {
        return this.hp;
    }

    public setHp(newHp: number): void {
        if (newHp >= this.hp) {
            this.isDead = true;
        }
        this.hp = newHp;
    }

    public getCharacterClass(): CharacterClass {
        return this.characterClass;
    }

}