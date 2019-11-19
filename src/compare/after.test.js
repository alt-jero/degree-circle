import test from 'ava'

import after from './after'

function shouldBeTrue (t, a, b) { t.true( after(a, b) ) }
function shouldBeFalse (t, a, b) { t.false( after(a, b) ) }
shouldBeTrue.title = (provided, a, b) => `after(${a}, ${b}) should equal true`
shouldBeFalse.title = (provided, a, b) => `after(${a}, ${b}) should equal false`

test(shouldBeTrue, 1, 0)
test(shouldBeFalse, 0, 0)
test(shouldBeFalse, 0, 1)
test(shouldBeFalse, 180, 0)
test(shouldBeFalse, 0, 180)
