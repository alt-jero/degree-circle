const opposite = require('./opposite')
/**
 * Return whether angle a > angle b (Where a - b < 180)
 * @param {number} a a value in degrees (normalized, phase-shifted)
 * @param {number} b a value in degrees (normalized, phase-shifted)
 * @returns {boolean} whether a > b
 * @description
 * an angle is after another angle if:
 * - the angle has a greater degree-value (Normalized for zero-crossing)
 * - the difference between the two angles is not zero
 * - the difference between the two angles is not 180 exactly
 */
const after = (a, b) => a > b && !opposite(a, b)

module.exports = after