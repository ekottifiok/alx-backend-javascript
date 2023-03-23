export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a String');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
 * @param {String} code
 */
  set code(code) {
    if (typeof code !== 'string') throw new TypeError('Code must be a String');
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
