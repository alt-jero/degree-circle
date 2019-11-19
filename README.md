# degree-circle
A small library for comparing and performing operations on 0-360 degree values

## Description
This library can be used for comparing angles in degrees to see which comes before/after which,
whether they are equal or whether they are opposite. Addition, subtraction, multiplication, division
and modulus division (remainder) are also possible, with results in the 0-360 range no matter how large
the inputs nor whether they are positive or negative. Division by zero may cause unexpected results.

Angle comparison works even when the shortest distance around the circle between each angle crosses
the zero line. IE 350º still comes before 5º. The transition point is where the two angles are opposite,
thus: 180 degrees apart. Technically, opposite angles are neither before nor after each other, but there are
methods which will include opposite angles, as well as equal angles, similar to the '>=' and '<=' operators.

## Usage
`npm i degree-circle`

```javascript
const angle = require('degree-circle')

console.log(angle(5).isBefore(7)) // => true
console.log(angle(359).isBefore(0)) // => true (Crosses 360/0 boundary)

console.log(angle(0).isEqualTo(360)) // => true
console.log(angle(355).isEqualTo(-5)) // => true

console.log(angle(0).isBefore(360)) // => false (Same)
console.log(angle(0).isBeforeOrEqualTo(360)) // => true

console.log(angle(-90).isBeforeOppositeOrEqualTo(270)) // => true (Equal)
console.log(angle(-90).isBeforeOppositeOrEqualTo(90)) // => true (Opposite)
console.log(angle(-90).isBeforeOppositeOrEqualTo(30)) // => true (Before)
```

## API
The API is rather simple. First:
```javascript
const angle = require('degree-circle')
```
Then call angle(a) with your first angle in degrees. Next call one of the following:
### Operations
#### add(b: number): number
add b to a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees (any number)
   * @returns {number} a + b: (0 <= n < 360)

#### subtract(b: number): number
subtract b from a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a - b: (0 <= n < 360)

#### multiply(b: number): number
multiply b with a and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a * b: (0 <= n < 360)

#### divide(b: number): number
divide a by b and return the result on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a / b: (0 <= n < 360)

#### modulo(b: number): number
divide a by b and return the remainder on the degree-circle (0 <= n < 360)
   * @param {number} b a value in degrees
   * @returns {number} a % b: (0 <= n < 360)

### Comparisons
#### isEqualTo(b: number): boolean
compare b to a and return whether the two angles are equal
   * @param {number} b a value in degrees
   * @returns {boolean} a === b where a and b have been normalized to (0 <= n < 360)

#### isOpposite(b: number): boolean
compare b to a and return whether the two angles are opposite (180º out of phase)
   * @param {number} b a value in degrees
   * @returns {boolean} a === b ± 180 where a and b have been normalized to (0 <= n < 360)

#### isBefore(b: number): boolean
compare b to a and return whether a comes before b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a < b where a and b have been normalized to (0 <= n < 360)
   * @description
   * an angle is before another angle if:
   * - the angle has a lesser degree-value (Normalized for zero-crossing)
   * - the difference between the two angles is not zero
   * - the difference between the two angles is not 180 exactly

#### isAfter(b: number): boolean
compare b to a and return whether a comes after b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a > b where a and b have been normalized to (0 <= n < 360)
   * @description
   * an angle is after another angle if:
   * - the angle has a greater degree-value (Normalized for zero-crossing)
   * - the difference between the two angles is not zero
   * - the difference between the two angles is not 180 exactly

#### isBeforeOrEqualTo(b: number): boolean
compare b to a and return whether a comes on or before b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a <= b where a and b have been normalized to (0 <= n < 360)

#### isAfterOrEqualTo(b: number): boolean
compare b to a and return whether a comes on or after b on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a >= b where a and b have been normalized to (0 <= n < 360)

#### isBeforeOrOpposite(b: number): boolean
compare b to a and return whether a comes before b on the circle, including exactly opposite
   * @param {number} b a value in degrees
   * @returns {boolean} a < b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)

#### isAfterOrOpposite(b: number): boolean
compare b to a and return whether a comes after b on the circle, including exactly opposite
   * @param {number} b a value in degrees
   * @returns {boolean} a > b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)

#### isBeforeOppositeOrEqual(b: number): boolean
compare b to a and return whether a comes on or before b, or exactly opposite to b, on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a <= b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)

#### isAfterOppositeOrEqual(b: number): boolean
compare b to a and return whether a comes on or after b, or exactly opposite to b, on the circle
   * @param {number} b a value in degrees
   * @returns {boolean} a >= b or abs(a - b) === 180 where a and b have been normalized to (0 <= n < 360)
