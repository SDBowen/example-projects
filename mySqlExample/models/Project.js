/* eslint-disable no-console */

const { db } = require('../config/db.js');

class Project {
  constructor(name) {
    this.name = name;
    this.updated_at = new Date();
  }

  static create() {
    return `
      INSERT INTO projects set ?
    `;
  }

  static getById() {
    return `
      SELECT * FROM projects WHERE id = ?
    `;
  }

  static getAll() {
    return `
      Select * from projects
    `;
  }

  static updateById() {
    return `
      UPDATE projects SET ? WHERE id = ?
    `;
  }

  static remove() {
    return `
      DELETE FROM projects WHERE id = ?
    `;
  }
}

module.exports = Project;
