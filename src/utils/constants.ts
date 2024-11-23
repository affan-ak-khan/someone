import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 14;
export const MAX_COLS = 15;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: true,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: true,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};


export const TILE_STYLE =
"lg:w-[34px] md:w-[30px] xs:w-[16px] w-[14px] lg:h-[34px] md:h-[30px] xs:h-[16px] h-[14px] border-t border-r border-slate-600";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-purple-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-orange-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-white";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-yellow-600";

export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" }
];

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "A-Star", value: "A_STAR" },
  
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;