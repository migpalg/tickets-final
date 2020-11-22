// @packages
import { v4 as uuid } from "uuid";

// @scripts
import { Ticket } from "./ticket";
import { UnvalidValueError } from "@app/exceptions/values/unvalid-value";

describe("Ticket model unit test", () => {
  let ticketId: string;
  let ticket: Ticket;

  beforeAll(() => {
    // Binds ticket id
    ticketId = uuid();
  });

  beforeEach(() => {
    ticket = Ticket.withId(ticketId);
  });

  it("should create a ticket with the provided id", () => {
    expect(ticket.id).toEqual(ticketId);
    expect(ticket.attendedAt).toBeNull();
    expect(ticket.createdAt).not.toBeNull();
    expect(ticket.createdAt.valueOf()).toBeLessThanOrEqual(Date.now());
  });

  it("should throw an error when passed unvalid attended date", () => {
    const throwable = () => {
      ticket.updateAttendedDate(new Date(Date.now() - Date.now() / 4));
    };

    expect(throwable).toThrow(UnvalidValueError);
  });

  it("should return negative number when attended date was not setted", () => {
    expect(ticket.getAttendedTotalSeconds()).toBeLessThan(0);
  });

  it("should calculate seconds when passed correct attended date", () => {
    ticket.updateAttendedDate(new Date(Date.now() + Date.now() * 0.05));

    // Elapsed time in milliseconds
    const timeDifference =
      (ticket.attendedAt?.valueOf() || 0) - ticket.createdAt.valueOf();

    expect(ticket.getAttendedTotalSeconds()).toBeGreaterThan(0);
    expect(ticket.getAttendedTotalSeconds()).toEqual(timeDifference * 1000);
  });
});
