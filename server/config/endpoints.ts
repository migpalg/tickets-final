import { environments } from "./environments";

export interface ApplicationServices {
  mongo: string;
}

export const endpoints: { [envName: string]: ApplicationServices } = {
  [environments.LOCAL]: {
    mongo: "mongodb://local.db:27017",
  },
  [environments.TEST]: {
    mongo: "mongodb://test.db:27017",
  },
  [environments.PRODUCTION]: {
    mongo: "mongodb://production.db:27017",
  },
};
