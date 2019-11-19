import test from 'ava'

const testFunctionName = 'afterInclusive'

const testFunction = require(`./${testFunctionName}`)

function shouldBeTrue (t, a, b) { t.true( testFunction(a, b) ) }
function shouldBeFalse (t, a, b) { t.false( testFunction(a, b) ) }
shouldBeTrue.title = (provided, a, b) => `${testFunctionName}(${a}, ${b}) should equal true`
shouldBeFalse.title = (provided, a, b) => `${testFunctionName}(${a}, ${b}) should equal false`

test(shouldBeTrue, 1, 0)
test(shouldBeTrue, 0, 0)
test(shouldBeFalse, 0, 1)
test(shouldBeTrue, 180, 0)
test(shouldBeFalse, 0, 180)
