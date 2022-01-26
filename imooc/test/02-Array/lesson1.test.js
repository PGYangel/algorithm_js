import lesson1 from '../../code/02-Array/lesson1'

test('lesson1', () => {
    expect(lesson1('23')).toStrictEqual([
        "ad", "ae", "af",
        "bd", "be", "bf",
        "cd", "ce", "cf"
    ])
})

test('lesson1', () => {
    expect(lesson1('234')).toStrictEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
})