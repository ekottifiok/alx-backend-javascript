export default class HolbertonClass {
  constructor(size, ) {
    this.size = size;
    this.location = location;
  }

  /**
  * @param {String} size
  */
  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  /**
   * @param {Number} location
   */
  set location(location) {
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
