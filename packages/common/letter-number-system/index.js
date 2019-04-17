const UpperACode = 64
const LetterSize = 26

function letterNumberSystem(count = 1) {
  const letters = []
  let inCount = count
  while(inCount > 0) {
    const remainder = (inCount % LetterSize) || LetterSize
    const rightCode = String.fromCharCode(remainder + UpperACode)
    letters.push(rightCode)
    inCount = (inCount - remainder) / LetterSize
  }

  return letters.reverse().join('')
}

// 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z

// 10 -> 0 * 26^0 + 10 -> J
// 30 -> 0 * 26^1 + 1 * 26 + 4 -> A-D
// 100 -> 0 * 26^1 + 3 * 26 + 22 -> C-V
// 1000 -> 1 * 26^2 + 12 * 26 + 12 -> A-L-L
// 10000 -> 14 * 26^2 + 20 * 26 + 16 -> N-T-P
// 100000 -> 5 * 26^3 + 17 * 26^2 + 24 * 26 + 4 -> E-Q-X-D

// AB -> 1 * 26^1 + 2
// DD -> 4 * 26^1 + 4
// XY -> 24 * 26^1 + 25
// ABCD -> 1 * 26^3 + 2 * 26^2 + 3 * 26^1 + 4

// console.log('AB', letterNumberSystem(28))
// console.log('DD', letterNumberSystem(108))
// console.log('XY', letterNumberSystem(649))
// console.log('ABCD', letterNumberSystem(19010))
// console.log()
// console.log('J' === letterNumberSystem(10) ? '✅' : '❌', 'expect 10 to be J')
// console.log('AD' === letterNumberSystem(30) ? '✅' : '❌', 'expect 30 to be AD')
// console.log('CV' === letterNumberSystem(100) ? '✅' : '❌', 'expect 100 to be CV')
// console.log('ALL' === letterNumberSystem(1000) ? '✅' : '❌', 'expect 1000 to be ALL')
// console.log('NTP' === letterNumberSystem(10000) ? '✅' : '❌', 'expect 10000 to be NTP')
// console.log('EQXD' === letterNumberSystem(100000) ? '✅' : '❌', 'expect 100000 to be EQXD')
// console.log()
// console.log('ABCD' === letterNumberSystem(19010) ? '✅' : '❌', 'expect 19010 to be ABCD')
// console.log('Z' === letterNumberSystem(26) ? '✅' : '❌', 'expect 26 to be Z')
// console.log('AZ' === letterNumberSystem(52) ? '✅' : '❌', 'expect 52 to be AZ')
// console.log('YZ' === letterNumberSystem(676) ? '✅' : '❌', 'expect 676 to be YZ')
// console.log()
// const columns = Array.from({ length: 1000 }).map((_, index) => letterNumberSystem(index + 1))
// console.log(columns.join(' | '))

module.exports = letterNumberSystem
