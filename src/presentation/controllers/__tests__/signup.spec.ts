import { SignUpController } from '../signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    // sut = System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'foo@bar.com',
        password: 'foo.bar',
        passwordConfirmation: 'foo.bar',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
