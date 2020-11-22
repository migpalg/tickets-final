// @packages
import { RequestHandler } from "express";

// @scripts
import appInfo from "@package";

/**
 * Handles all root requests
 */
export class HomeController {
  /**
   * Handle requests on page index
   */
  public static index: RequestHandler = (req, res) => {
    res.render("index", {
      title: "Home",
      version: appInfo.version,
      author: appInfo.author.name,
      authorUrl: appInfo.author.url,
    });
  };
}
