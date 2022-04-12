export const sumPositiveIntegers = (num1, num2) => {
  if (num1 < 0 || num2 < 0)
    throw new Error('Parameters must be greater than or equal to 0')
  return num1 + num2
}

describe('App test suite', () => {
  test('should return the right answer', () => {
    expect(sumPositiveIntegers(5, 5)).toBe(10)
  })  
})

describe('when one or more of the arguments are negative numbres', () => {

  it('should throw an error', () => {
    let error;
    try {
      sumPositiveIntegers(-4, 6)
    } catch(exception) {
      error = exception
    }
    expect(error).toBeDefined()
    expect(error.message).toBe('Parameters must be greater than or equal to 0')

  })

})
