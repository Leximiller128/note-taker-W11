const fs = require("fs");
const util = require("util");
const { v4 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(notesArray) {
    return writeFileAsync("db/db.json", JSON.stringify(notesArray));
  }
  getNotes() {
    return this.read().then((notes) => JSON.parse(notes));
  }
}

module.exports = new Store();
