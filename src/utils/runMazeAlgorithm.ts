
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import { constructBorder } from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) => {
 {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;
    await constructBorder(grid, startTile, endTile);
    
    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
};
