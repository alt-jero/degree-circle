/**
 * Return whether two angles are opposite
 * @param {number} a a value in degrees
 * @param {number} b a value in degrees
 * @returns {boolean} whether the difference in angles a and b is ±180 exactly
 * @description
 * an angle is opposite another angle if:
 * - the difference between the two angles is 180 exactly
 */
const opposite = (a, b) => Math.abs(a - b) === 180

module.exports = opposite