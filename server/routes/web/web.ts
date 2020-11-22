// @scripts
import { Router } from "express";

// @packages
import { homeRouter } from "./home";

export const webRouter = Router()
  /**
   * Main route
   */
  .use("/", homeRouter);
