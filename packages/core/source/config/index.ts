export enum Queue {
  EXECUTION_QUEUE = "execution_queue",
}

export enum Job {
  GAME_WORLD_CHECK = "GAME_WORLD_CHECK",
  ONLINE_PLAYERS_CHECK = "ONLINE_PLAYERS_CHECK",
  RANKING_CHECK = "RANKING_CHECK",
}

export default {
  queues: Queue,
  jobs: Job,
};
