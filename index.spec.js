const {  
  paIterable,
  schoolStudentsIterable,
  neighborsIterable
} = require('./index')
 
describe('Iterables challenge', () => {

  describe('paIterable', () => {
    describe('if I try iterating through the first 20 elements of a crescent PA with a1=1 and d=20', () => {
      it('the sequency should be generated correctly', () => {
        let i = 0
        let result = []
        let iterator = paIterable(1, 20)[Symbol.iterator]()
        for(n = 0;  i < 20; i++) {
          result.push(iterator.next().value)
        }

        expect(result).toEqual([
          1,21,41,61,81,101,121,141,161,181,
          201,221,241,261,281,301,321,341,361,381
        ])
      })
    })

    describe('if I try iterating through the first 20 elements of a decrescent PA with a1=1 and d=-10', () => {
      it('the sequency should be generated correctly', () => {
        let i = 0
        let result = []
        let iterator = paIterable(1, -10)[Symbol.iterator]()
        for(n = 0;  i < 20; i++) {
          result.push(iterator.next().value)
        }

        expect(result).toEqual([
          1,-9,-19,-29,-39,-49,-59,-69,-79,-89,
          -99,-109,-119,-129,-139,-149,-159,-169,-179,-189
        ])
      })
    })
  })

  describe('schoolStudentsIterable', () => {
    it('should be possible iterate through all students of all schools', () => {
      const schools =  [
        { students: ['Jeremy', 'Iola', 'Odette', 'Nigel'] },
        { students: ['Kibo', 'Dalton', 'Dorothy'] },
        { students: ['Quintessa', 'Virginia', 'Mason', 'India'] },
        { students: ['Alisa', 'Zahir'] }
      ]

      expect([...schoolStudentsIterable(schools)]).toEqual([
        'Jeremy', 'Iola', 'Odette', 'Nigel',
        'Kibo', 'Dalton', 'Dorothy',
        'Quintessa', 'Virginia', 'Mason', 'India',
        'Alisa', 'Zahir'
      ])
    })
  })

  describe('neighborsIterable', () => {

  })
})