// @packages
import { RequestHandler } from "express";

// @scripts
import { Ticket } from "@app/models/ticket/ticket";

export class TicketsController {
  public static createTicket: RequestHandler = (req, res) => {
    res.status(200).send({
      message: "ticket created",
    });
  };
}
