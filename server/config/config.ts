// @scripts
import { ApplicationServices, endpoints } from "./endpoints";
import { environments } from "./environments";

/**
 * Configuration of the application
 */
export class Config {
  // Singleton instance
  private static instance: Config;

  public static getInstance(): Config {
    return this.instance || new Config(environments, endpoints);
  }

  private constructor(
    private _environments: typeof environments,
    private _endpoints: typeof endpoints,
  ) {}

  public get environment(): string {
    return process.env.NODE_ENV || this._environments.LOCAL;
  }

  public get endpoints(): ApplicationServices {
    return this._endpoints[this.environment];
  }
}
