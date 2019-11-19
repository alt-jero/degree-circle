const equal = require('./equal')
const before = require('./before')
const after = require('./after')
const beforeOrOpposite = require('./beforeOrOpposite')
const afterOrOpposite = require('./afterOrOpposite')
const beforeInclusive = require('./beforeInclusive')
const afterInclusive = require('./afterInclusive')
const opposite = require('./opposite')

const compare = {
  equal,
  before,
  after,
  beforeOrOpposite,
  afterOrOpposite,
  beforeInclusive,
  afterInclusive,
  opposite,
  notOpposite: (a, b) => !opposite(a, b),
}

module.exports = compare