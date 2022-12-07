import { PlayerFactory } from "./classes/PlayerFactory";
import { PlayerService } from "./classes/Service/PlayerService";
import { ECharacterClass } from "./enums/ECharacterClass";
import { EPlayerActions } from "./enums/EPlayerActions";

const warrior = PlayerFactory.create('Alex', ECharacterClass.WARRIOR);
const mage = PlayerFactory.create('Enemy', ECharacterClass.MAGE);

PlayerService.useAction(EPlayerActions.PLAYER_ATTACK, warrior, mage);
PlayerService.useAction(EPlayerActions.PLAYER_SPELL, warrior);