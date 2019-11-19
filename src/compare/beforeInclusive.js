/**
 * Return whether angle a <= angle b
 * @param {number} a a value in degrees (normalized, phase-shifted)
 * @param {number} b a value in degrees (normalized, phase-shifted)
 * @returns {boolean} whether a <= b
 * @description
 * an angle is before another angle if:
 * - the angle has a lesser degree-value (Normalized for zero-crossing)
 * - the difference between the two angles is not zero
 * - the difference between the two angles is not 180 exactly
 * This comparison will also yield true if the inputs are equal or opposite.
 */
const beforeInclusive = (a, b) => a <= b

module.exports = beforeInclusive