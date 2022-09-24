import employeeRepository from '../../../../src/frameworks/repositories/employee.repository'

describe('Employee repository', () => {
  test('should return user by id', async () => {
    const id = '0W2w0TFoyn3AbUf10hYn'
    const result = await employeeRepository.getById(id)
    const testUser = {
      firstName: 'Test subject',
      lastName: 'García Flores',
      description1: 'Junior en Senior en las marcas Salter Labs, ResMed, Longfian y  Fisher & Paykel',
      description2: 'Especialista en almacenaje, dirección y coordinación de los productos de material de curación.',
      image: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/cards%2FCarlos%20Omar%2FCarlos%20Omar-image.jpg?alt=media&token=1d041e52-b07d-4e81-83e2-1431a7c365fa',
      job: 'Jefe de Almacén ',
      phone: '5580494313',
      sucursal: 'dm-sur'
    }

    expect(result).toBeDefined()
    expect(result.firstName).toBe(testUser.firstName)
    expect(result.lastName).toBe(testUser.lastName)
    expect(result.description1).toBe(testUser.description1)
    expect(result.description2).toBe(testUser.description2)
    expect(result.image).toBe(testUser.image)
    expect(result.job).toBe(testUser.job)
    expect(result.phone).toBe(testUser.phone)
    expect(result.phone).toBe(testUser.phone)
  })
})
