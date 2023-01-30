import { Character } from "./Character";
import { CharacterClass } from "./CharacterClass/CharacterClass";
import { v4 as uuidv4 } from 'uuid';

export class Player extends Character {
    private id: string = uuidv4(); 
    private nickname: string = 'test';

    constructor(nickName: string, characterClass: CharacterClass) {
        super(characterClass);
        this.nickname = nickName;
    }

    public getId(): string {
        return this.id;
    }

    useSpell(name: string, target?: Player) {
        let foo = this.characterClass.useAbility(name);
        target = target !== undefined ? target : this;

        return foo instanceof Function ? foo(target) : foo;

    }

    useAttack(target: Player) {
        return this.characterClass.useAttack(target);
    }
}