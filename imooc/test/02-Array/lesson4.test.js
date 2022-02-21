import lesson4 from '../../code/02-Array/lesson4'

test('lesson4', () => {
    expect(lesson4(2)).toEqual(['00','01','11','10'])
})

test('lesson4', () => {
    expect(lesson4(3)).toEqual(['000','001','011','010','110','111','101','100'])
})