import test from 'ava'

import phaseShift from './phaseShift'

function doesNotShiftA   (t, a, b) { t.true( phaseShift(a, b)[0] === a ) }
function doesNotShiftB   (t, a, b) { t.true( phaseShift(a, b)[1] === b ) }
function shiftsAForward  (t, a, b) { t.true( phaseShift(a, b)[0] === a + 180 ) }
function shiftsABackward (t, a, b) { t.true( phaseShift(a, b)[0] === a - 180 ) }
function shiftsBForward  (t, a, b) { t.true( phaseShift(a, b)[1] === b + 180 ) }
function shiftsBBackward (t, a, b) { t.true( phaseShift(a, b)[1] === b - 180 ) }

doesNotShiftA   .title = (provided, a, b) => `a:${a} remains the same`
doesNotShiftB   .title = (provided, a, b) => `b:${b} remains the same`
shiftsAForward  .title = (provided, a, b) => `a:${a} shifts forward to ${a + 180}`
shiftsABackward .title = (provided, a, b) => `a:${a} shifts backward to ${a - 180}`
shiftsBForward  .title = (provided, a, b) => `b:${b} shifts forward to ${b + 180}`
shiftsBBackward .title = (provided, a, b) => `b:${b} shifts backward to ${b - 180}`

const shouldShiftNeither = [doesNotShiftA, doesNotShiftB]
const shouldShiftAFBB = [shiftsAForward, shiftsBBackward]
const shouldShiftABBF = [shiftsABackward, shiftsBForward]

test(shouldShiftNeither, 0, 180)
test(shouldShiftNeither, 180, 0)
test(shouldShiftNeither, 359, 179)
test(shouldShiftNeither, 179, 359)

test(shouldShiftAFBB, 10, 350)
test(shouldShiftAFBB, 89, 270)
test(shouldShiftAFBB, 90, 271)
test(shouldShiftNeither, 90, 270)


test(shouldShiftABBF, 350, 10)
test(shouldShiftABBF, 270, 89)
test(shouldShiftABBF, 271, 90)
test(shouldShiftNeither, 270, 90)

