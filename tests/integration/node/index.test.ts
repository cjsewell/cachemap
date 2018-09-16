import Core from "@cachemap/core";
import map from "@cachemap/map";
import redis from "@cachemap/redis";
import { run } from "../test-runner";

run(
  { cachemapSize: (value) => value, init: async (options: any) => Core.init(options) },
  "redis",
  redis,
  { mock: true },
);

run(
  { cachemapSize: (value) => value - 1, init: async (options: any) => Core.init(options) },
  "map",
  map,
);