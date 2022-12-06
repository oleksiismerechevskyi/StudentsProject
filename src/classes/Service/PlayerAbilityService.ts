import { Player } from "../Player";

export class PlayerAbilityService {

     public static useSpell(player: Player, spellName: string, target?: Player) {
        return player.useSpell(spellName, target);
     }

     public static useAttack(player: Player, target: Player) {
        return player.useAttack(target);
    }

}