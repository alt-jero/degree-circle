const positiveDegrees = require('./src/positiveDegrees')
const compare = require('./src/compare')
const normalizeThen = require('./src/normalizeThen')


/**
 * returns an object with operations and comparisons to apply to its input
 * @param {number} a a value in degrees
 * @returns {object} functions to apply to input value
 * @example angle(1).isBefore(2) => true
 * @example angle(1).add(360) => 1
 * @example angle(3).subtract(13) => 350
 * @example angle(90).isOpposite(269) => false
 */
const angle = a => ({
  // Operations
  /**
   * add b to a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a + b: (0 <= n < 360)
   */
  add(b) {
    return positiveDegrees(a + b)
  },
  /**
   * subtract b from a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a - b: (0 <= n < 360)
   */
  subtract(b) {
    return positiveDegrees(a - b)
  },
  /**
   * multiply b with a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a * b: (0 <= n < 360)
   */
  multiply(b) {
    return positiveDegrees(a * b)
  },
  /**
   * divide a by b and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a / b: (0 <= n < 360)
   */
  divideBy(b) {
    return positiveDegrees(a / b)
  },
  /**
   * divide a by b and return the remainder on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a % b: (0 <= n < 360)
   */
  modulo(b) {
    return positiveDegrees(a % b)
  },
  // Comparisons
  /**
   * compare b to a and return whether the two angles are equal
   * @param {number} b a value in degrees
   * @returns {boolean} a === b where a and b have been normalized to (0 <= n < 360)
   */
  isEqualTo(b) {
    return normalizeThen(compare.equal, a, b)
  },
  /**
   * compare b to a and return whether the two angles are opposite (180º out of phase)
   * @param {number} b a value in degrees
   * @returns {boolean} a === b ± 180 where a and b have been normalized to (0 <= n < 360)
   */
  isOpposite(b) {
    return normalizeThen(compare.opposite, a, b)
  },
  /**
   * compare b to a and return whether a comes before b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a < b where a and b have been normalized to (0 <= n < 360)
   * @description
   * an angle is before another angle if:
   * - the angle has a lesser degree-value (Normalized for zero-crossing)
   * - the difference between the two angles is not zero
   * - the difference between the two angles is not 180 exactly
   */
  isBefore(b) {
    return normalizeThen(compare.before, a, b)
  },
  /**
   * compare b to a and return whether a comes after b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a > b where a and b have been normalized to (0 <= n < 360)
   * @description
   * an angle is after another angle if:
   * - the angle has a greater degree-value (Normalized for zero-crossing)
   * - the difference between the two angles is not zero
   * - the difference between the two angles is not 180 exactly
   */
  isAfter(b) {
    return normalizeThen(compare.after, a, b)
  },
  /**
   * compare b to a and return whether a comes on or before b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a <= b where a and b have been normalized to (0 <= n < 360)
   */
  isBeforeOrEqualTo(b) {
    return normalizeThen((...args) => compare.before(...args) || compare.equal(...args), a, b)
  },
  /**
   * compare b to a and return whether a comes on or after b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a >= b where a and b have been normalized to (0 <= n < 360)
   */
  isAfterOrEqualTo(b) {
    return normalizeThen((...args) => compare.after(...args) || compare.equal(...args), a, b)
  },
  /**
   * compare b to a and return whether a comes before b on the circle, including exactly opposite
   * @param {number} b a value in degrees
   * @returns {boolean} a < b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)
   */
  isBeforeOrOpposite(b) {
    return normalizeThen(compare.beforeOrOpposite, a, b)
  },
  /**
   * compare b to a and return whether a comes after b on the circle, including exactly opposite
   * @param {number} b a value in degrees
   * @returns {boolean} a > b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)
   */
  isAfterOrOpposite(b) {
    return normalizeThen(compare.afterOrOpposite, a, b)
  },
  /**
   * compare b to a and return whether a comes on or before b, or exactly opposite to b, on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a <= b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)
   */
  isBeforeOppositeOrEqual(b) {
    return normalizeThen(compare.beforeInclusive, a, b)
  },
  /**
   * compare b to a and return whether a comes on or after b, or exactly opposite to b, on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a >= b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)
   */
  isAfterOppositeOrEqual(b) {
    return normalizeThen(compare.afterInclusive, a, b)
  }
})

module.exports = angle