const phaseShift = require('./phaseShift')
const positiveDegrees = require('./positiveDegrees')

/**
 * Normalize and phase-shift inputs, then pass to fn and return result
 * @param {Function} fn A function to apply to a and b
 * @param {number} a a number of degrees
 * @param {number} b a number of degrees
 * @returns {*} the return value of fn
 */
const normalizeThen = (fn, a, b) => fn(...phaseShift(positiveDegrees(a), positiveDegrees(b)))

module.exports = normalizeThen