import test from 'ava'

import positiveDegrees from './positiveDegrees'

function outputShouldBe (t, input, expected) { t.true( positiveDegrees(input) === expected ) }
outputShouldBe   .title = (provided, input, expected) => `positiveDegrees(${input}) should output: ${expected}`

test(outputShouldBe, -1, 359)
test(outputShouldBe, 1, 1)
test(outputShouldBe, -360, 0)
test(outputShouldBe, -361, 359)
test(outputShouldBe, 360, 0)
test(outputShouldBe, 361, 1)
