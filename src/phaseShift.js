/**
 * Shift a and b so that the shortest distance between
 * them does not cross zero.
 * @param {number} a first angle: 0 <= a < 360
 * @param {number} b second angle: 0 <= b < 360
 * @returns {number[2]} array with a and b, in order, shifted.
 * @description
 * To compare two angles to see which comes before/after, they need to be shifted such that the shortest
 * distance between them does not cross the 360/0 degree boundary. This is done such that the angle whose
 * value is closer to 360 degrees is moved backward by a half-circle, and the angle whose value is closer
 * to zero is moved forward by the same amount. This allows us to create a mirror image, with the angles
 * in the same order of larger/smaller, but near the 180 degree mark instead of the 360/0 degree mark.
 */
const phaseShift = (a, b) =>
    // If the shortest distance between A and B
    // involves wrapping around the 360/0 degrees mark
    // then shift that shortest distance 180º
  (a > b && a - b > 180) // If a is the larger input
  ? [a - 180, b + 180] // Shift a 180º backwards and b 180º forwards
  : (b > a && b - a > 180) // If b is the larger input
  ? [a + 180, b - 180] // Shift b 180º backwards and a 180º forwards
  : [a, b] // If the shortest distance doesn't involve wrapping, return as-is.

module.exports = phaseShift
