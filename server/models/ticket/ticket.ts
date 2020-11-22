// @scripts
import { UnvalidValueError } from "@app/exceptions/values/unvalid-value";

export class Ticket {
  /**
   * Creates a new ticket with the provided id
   * @param id Id of the new ticket
   */
  public static withId(id: string): Ticket {
    return new Ticket(id, new Date(), null);
  }

  constructor(
    private _id: string,
    private _createdAt: Date,
    private _attendedAt: Date | null,
  ) {}

  /**
   * Id of the ticket
   */
  get id(): string {
    return this._id;
  }

  /**
   * Day that the ticket was attended
   */
  get attendedAt(): Date | null {
    return this._attendedAt;
  }

  /**
   * Day that the ticket was created
   */
  get createdAt(): Date {
    return this._createdAt;
  }

  public getAttendedTotalSeconds(): number {
    if (!this._attendedAt || !this._createdAt) {
      return -1;
    }

    return (this._attendedAt.valueOf() - this._createdAt.valueOf()) * 1000;
  }

  public updateAttendedDate(date: Date): void {
    if (date.valueOf() <= this._createdAt.valueOf()) {
      throw new UnvalidValueError(
        "Attended date must be greather than created date",
      );
    }

    this._attendedAt = date;
  }
}
