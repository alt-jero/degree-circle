import test from 'ava'

import angle from './degreeCircle'

const degreeLoop = testFn => {
  for(let i = -720; i <= 720; i ++) {
    testFn(i)
  }
}

function shouldBeAfter       (t, a, b) { t.true  ( angle(a).isAfter(b)    ) }
function shouldBeBefore      (t, a, b) { t.true  ( angle(a).isBefore(b)   ) }
function shouldBeEqual       (t, a, b) { t.true  ( angle(a).isEqualTo(b)  ) }
function shouldBeOpposite    (t, a, b) { t.true  ( angle(a).isOpposite(b) ) }
function shouldNotBeAfter    (t, a, b) { t.false ( angle(a).isAfter(b)    ) }
function shouldNotBeBefore   (t, a, b) { t.false ( angle(a).isBefore(b)   ) }
function shouldNotBeEqual    (t, a, b) { t.false ( angle(a).isEqualTo(b)  ) }
function shouldNotBeOpposite (t, a, b) { t.false ( angle(a).isOpposite(b) ) }

shouldBeAfter       .title = (provided, a, b) => `${a} is after ${b}`
shouldBeBefore      .title = (provided, a, b) => `${a} is before ${b}`
shouldBeEqual       .title = (provided, a, b) => `${a} is equal to ${b}`
shouldBeOpposite    .title = (provided, a, b) => `${a} is opposite ${b}`
shouldNotBeAfter    .title = (provided, a, b) => `${a} is not after ${b}`
shouldNotBeBefore   .title = (provided, a, b) => `${a} is not before ${b}`
shouldNotBeEqual    .title = (provided, a, b) => `${a} is not equal to ${b}`
shouldNotBeOpposite .title = (provided, a, b) => `${a} is not opposite ${b}`

const neitherBeforeNorAfter = [shouldNotBeAfter, shouldNotBeBefore]

// isBefore and isAfter half-phase tests
test(neitherBeforeNorAfter, 180, 0)
test(neitherBeforeNorAfter, 180, 360)

// isBefore and isAfter equal tests
test(neitherBeforeNorAfter, 0, 360)
test(neitherBeforeNorAfter, 360, 0)

// n, n+-1 isBefore tests
test('n is before n+1', t => degreeLoop(i => t.true( angle(i).isBefore(i+1))))
test('n is not before n-1', t => degreeLoop(i => t.false( angle(i).isBefore(i-1))))

// n, n+-1 isAfter tests
test('n is after n-1', t => degreeLoop(i => t.true( angle(i).isAfter(i-1))))
test('n is not after n+1', t => degreeLoop(i => t.false( angle(i).isAfter(i+1))))

// isBeforeOrEqualTo and isAfterOrEqualTo, equal tests
test('0 is before or equal to 360', t => t.true( angle(0).isBeforeOrEqualTo(360)))
test('0 is after or equal to 360', t => t.true( angle(0).isAfterOrEqualTo(360)))

// isEqualTo
test(shouldBeEqual, 0, 360)
test(shouldBeEqual, 180, 180)
test(shouldBeEqual, -5, 355)
test(shouldNotBeEqual, 0, 180)

// isOpposite
test(shouldBeOpposite, 360, 180)
test(shouldBeOpposite, 0, 180)
test(shouldBeOpposite, 30, 210)
test(shouldBeOpposite, 60, 240)
test(shouldBeOpposite, 90, 270)
test(shouldBeOpposite, 120, 300)
test(shouldBeOpposite, 150, 330)
test(shouldBeOpposite, 180, 360)
test(shouldBeOpposite, 180, 0)

test(shouldNotBeOpposite, 0, 360)



// test('355º  is before 360º', t => t.assert( compareAngle(355).before(360)))
// test('355º  is before 361º', t => t.assert( compareAngle(355).before(361)))
// test('  0º  is after  359º', t => t.assert( compareAngle(  0).after (359)))
// test('270º  is before 359º', t => t.assert( compareAngle(270).before(359)))
// test('180º  is before 359º', t => t.assert( compareAngle(180).before(359)))
// test('270º  is after  180º', t => t.assert( compareAngle(270).after (180)))
// test('182º  is after    3º', t => t.assert( compareAngle(182).after (  3)))

// test('180º  is after    0º', t => t.assert( compareAngle(180).after (  0)))
// test('180º not before   0º', t => t.assert(!compareAngle(180).before(  0)))

// test('180º  is before 360º', t => t.assert( compareAngle(180).before(360)))
// test('180º not after  360º', t => t.assert(!compareAngle(180).after (360)))