import test from 'ava'

const testFunctionName = 'before'

const testFunction = require(`./${testFunctionName}`)

function shouldBeTrue (t, a, b) { t.true( testFunction(a, b) ) }
function shouldBeFalse (t, a, b) { t.false( testFunction(a, b) ) }
shouldBeTrue.title = (provided, a, b) => `${testFunctionName}(${a}, ${b}) should equal true`
shouldBeFalse.title = (provided, a, b) => `${testFunctionName}(${a}, ${b}) should equal false`

test(shouldBeTrue, 0, 1)
test(shouldBeFalse, 0, 0)
test(shouldBeFalse, 1, 0)
test(shouldBeFalse, 180, 0)
test(shouldBeFalse, 0, 180)
