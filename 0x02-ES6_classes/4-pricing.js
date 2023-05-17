import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a Number')
    this._amount = amount
  }

  get amount() {
    return this._amount
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency')
    this._currency = currency
  }

  get currency() {
    return this._currency
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount != 'number') throw new TypeError('Amount must be a Number')
    if (typeof conversionRate != 'number') throw new TypeError('ConversionRate must be a Number')
    return amount * conversionRate
  }
}
