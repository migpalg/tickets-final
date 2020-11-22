// @packages
import { Router } from "express";

// @scripts
import { HomeController } from "@app/controllers/home/home";

export const homeRouter = Router()
  /**
   * Index page
   */
  .get("/", HomeController.index);
