import { Team } from "@/types/team";

import { playerColors } from "@/constants/playerColors";

import {
  getPrimaryWeapon,
  getSecondaryWeapon,
  getNades,
  isPlayerHasBomb,
} from "@/lib/player";

import PlayerPrimaryWeapon from "@/components/PlayerPrimaryWeapon";
import PlayerSecondaryWeapon from "@/components/PlayerSecondaryWeapon";
import PlayerArmor from "@/components/PlayerArmor";
import PlayerNades from "@/components/PlayerNades";
import PlayerMisc from "@/components/PlayerMisc";

export default function PlayerStats({
  color,
  nickname,
  team,
  health,
  armor,
  hasHelmet,
  money,
  weapons,
  hasDefuser,
}: any) {
  return (
    <div className="overflow-hidden rounded-md bg-black/5 text-zinc-800 dark:bg-white/5 dark:text-white">
      <div className="relative grid w-full grid-cols-3 items-center justify-between bg-black/20 text-white dark:bg-white/5">
        <div
          className={`absolute h-full w-[0%] ${team === Team.Terrorist ? "bg-[hsl(36,74%,23%)]" : "bg-[hsl(219,33%,52%)]"}`}
          style={{ width: `${health}%` }}
        ></div>

        <span className="relative px-2 py-1">{health}</span>
        <span className="relative px-2 py-1 truncate">
          <span style={{ color: playerColors[color] }}>&#x25cf;</span>{" "}
          {nickname}
        </span>
        <PlayerPrimaryWeapon weapon={getPrimaryWeapon(weapons)} />
      </div>

      <div className="grid w-full grid-cols-2 sm:grid-cols-4 items-center justify-between gap-2 px-2 py-1">
        <span data-money={money} className="text-green-500">
          ${money}
        </span>
        <PlayerNades nades={getNades(weapons)} />
        <div className="flex items-center justify-between col-span-2 flex-row-reverse sm:flex-row">
          <div className="flex gap-2 brightness-[0.25] dark:brightness-100">
            <PlayerArmor armor={armor} hasHelmet={hasHelmet} />
            <PlayerMisc
              hasDefuser={hasDefuser}
              hasBomb={isPlayerHasBomb(weapons)}
            />
          </div>
          <PlayerSecondaryWeapon weapon={getSecondaryWeapon(weapons)} />
        </div>
      </div>
    </div>
  );
}
