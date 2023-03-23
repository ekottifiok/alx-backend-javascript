export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
  * @param {String} brand
  */
  set brand(value) {
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  /**
 * @param {String} motor
 */
  set motor(motor) {
    this._motor = motor;
  }

  get motor() {
    return this._motor;
  }

  /**
 * @param {String} color
 */
  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }
}
