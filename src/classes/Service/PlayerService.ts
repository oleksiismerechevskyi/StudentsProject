import { EPlayerActions } from "../../enums/EPlayerActions";
import { Warrior } from "../CharacterClass/Warrior";
import { Player } from "../Player";

export class PlayerService {
   private player: Player;

   constructor(player: Player) {
      this.player = player;
      console.log();
   }

   public static useAction(action: EPlayerActions, player: Player, target?: Player) {
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

   public useSpell(spellName: string, target?: Player): any {
      return this.player.useSpell(spellName, target);
   }

   public useAttack(target: Player): any {
      return this.player.useAttack(target);
   }

   public getPlayer(): Player {
      return this.player;
   }

}