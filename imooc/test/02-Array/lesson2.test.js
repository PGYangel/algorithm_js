import lesson2 from '../../code/02-Array/lesson2'

test('lesson2',()=>{
    expect(lesson2([2,3,1,4,4,3,2,1])).toBe(true)
})

test('lesson2',()=>{
    expect(lesson2([1,1,1,2,2,2,3,3])).toBe(false)
})

test('lesson2',()=>{
    expect(lesson2([1])).toBe(false)
})

test('lesson2',()=>{
    expect(lesson2([1,1])).toBe(true)
})

test('lesson2',()=>{
    expect(lesson2([1,1,2,2,2,2])).toBe(true)
})

test('lesson2',()=>{
    expect(lesson2([1,1,1,1,2,2,2,2,2,2])).toBe(true)
})