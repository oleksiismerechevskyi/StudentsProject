import { Warrior } from "./classes/CharacterClass/Warrior";
import { Player } from "./classes/Player";
import { PlayerFactory } from "./classes/PlayerFactory";
import { PlayerAbilityService } from "./classes/Service/PlayerAbilityService";
import { ECharacterClass } from "./enums/ECharacterClass";

const warrior = PlayerFactory.create('Alex', ECharacterClass.WARRIOR);
const mage = PlayerFactory.create('Enemy', ECharacterClass.MAGE);


PlayerAbilityService.useAttack(warrior, mage);
PlayerAbilityService.useSpell(warrior, 'blockShield');