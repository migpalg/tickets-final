// @packages
import { Router } from "express";

// @scripts
import { apiRouter } from "./api/api";
import { webRouter } from "./web/web";

export const router = Router()
  /**
   * Routes to return json based responses
   */
  .use("/api", apiRouter)

  /**
   * Routes for return views
   */
  .use("/", webRouter);
