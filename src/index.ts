import { Warrior } from "./classes/CharacterClass/Warrior";
import { Player } from "./classes/Player";

const warrior = new Player('Alex', new Warrior());

warrior.useSpell('blockShield');
warrior.useAttack(warrior);