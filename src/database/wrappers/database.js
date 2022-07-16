export default class Database {
  #database;

  constructor(database) {
    this.#database = database;
  }

  onChange(callbackfn) {
    this.#database.events.on('replicated', () => {
      callbackfn();
    });
  }
}
