import { Character } from "./Character";
import { CharacterClass } from "./CharacterClass/CharacterClass";

export class Player extends Character {
    private id: number = 0; 
    public nickname: string = 'test';

    constructor(nickName: string, characterClass: CharacterClass) {
        super(characterClass);
        this.nickname = nickName;
    }

    public getId(): number {
        return this.id;
    }

    useSpell(name: string, target?: Player) {
        let foo = this.characterClass.useAbility(name);
        target = target !== undefined ? target : this;

        return foo instanceof Function ? foo(this) : foo;

    }

    useAttack(target: Player) {
        return this.characterClass.useAttack(target);
    }
}