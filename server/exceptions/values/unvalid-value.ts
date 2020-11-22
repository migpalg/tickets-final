export class UnvalidValueError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "UnvalidValueError";
  }
}
