/**
 * Shift a value in degrees so that it fits on the unit-circle
 * Mod value by 360 and shift to positive such that the result is a number
 * between 0 and 360.
 * @param {number} value The degree-value to shift
 * @returns {number} a congruent value between 0 and 360
 */
const positiveDegrees = value => shiftToPositive(mod360(value))

/**
 * Shift a value in degrees so that it fits on the unit-circle
 * Mod value by 360 to get a number of degrees between -360 and 360 exclusive
 * @param {number} value The degree-value to shift
 * @returns {number} a number between -360 and 360
 */
const mod360 = value => value % 360

/**
 * Shift a value in degrees between -360 and 360 so that it fits on the unit-circle: 0-360 excluding 360
 * @param {number} value The degree-value to shift
 * @returns {number} a congruent value between 0 and 360
 */
const shiftToPositive = value => value < 0 ? value + 360 : value

module.exports = positiveDegrees