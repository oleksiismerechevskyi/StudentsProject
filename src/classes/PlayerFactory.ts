import { ECharacterClass } from "../enums/ECharacterClass";
import { Mage } from "./CharacterClass/Mage";
import { Rogue } from "./CharacterClass/Rogue";
import { Warrior } from "./CharacterClass/Warrior";
import { Player } from "./Player";

export class PlayerFactory {

    public static create(nickName: string, classCreation: ECharacterClass): Player | Error {

        switch (classCreation) {
            case 0:
                return new Player(nickName, new Warrior());
            case 1:
                return new Player(nickName, new Mage());;
            case 2:
                return new Player(nickName, new Rogue());;
            default:
                return new Error('Class not found');
        }
    }
}