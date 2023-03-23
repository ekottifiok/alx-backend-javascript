export default class HolbertonClass {
  constructor(location, size) {
    this.size = size;
    this.location = location;
  }

  /**
  * @param {String} size
  */
  set size(size) {
    if (typeof size !== 'string') throw new TypeError('Size must be a String');
    this._size = size;
  }

  get size() {
    return this._size;
  }

  /**
   * @param {Number} location
   */
  set location(location) {
    if (typeof location !== 'number') throw new TypeError('Location must be a Number');
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._location
    if (hint === 'string') return this._size
  }
}
