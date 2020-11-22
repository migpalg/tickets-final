// @packages
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import path from "path";

// @scripts
import { router } from "@app/routes";

const app = express();

// pug as default view engine
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "./views"));

// Use public folder as static content
app.use(express.static(path.resolve(__dirname, "../public")));

// Compress application responses
app.use(compression());

// Convert requests body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use router to handle requests
app.use(router);

export default app;
