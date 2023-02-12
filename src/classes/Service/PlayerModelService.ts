import { EPlayerActions } from "../../enums/EPlayerActions";
import { Player } from "../Player";

export class PlayerModelService {

   public useAction(action: EPlayerActions, player: Player, target?: Player) {
      target = target === undefined ? player : target;
      if (action === 1) {
         player.useAttack(target);
      }
      else if (action === 2) {
         switch (player.getCharacterClass().constructor.name) {
            case 'Warrior':
               player.useSpell('blockShield');
               break;
            case 'Mage':
               player.useSpell('counterSpell', target);
               break;
            case 'Rogue':
               player.useSpell('escapeSpell', target);
               break;
            default:
               break;
         }
      }
   }

}