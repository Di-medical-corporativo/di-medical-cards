import employee from '../../../../src/useCases/index'

describe('Employee use cases', () => {
  const mockEmployeRepo = {
    getById: jest.fn(async id => ({
      id,
      firstName: 'John',
      lastName: 'Smith',
      job: 'Gerente',
      sucursal: 'sur'

    }))
  }

  const dependencies = {
    employeeRepository: mockEmployeRepo
  }

  const { getEmployeeByIdUseCase } = employee

  describe('Get by id', () => {
    test('should return employee by id', async () => {
      const employeeById = await getEmployeeByIdUseCase(dependencies).execute({
        id: '123'
      })
      expect(employeeById.id).toBeDefined()
      expect(employeeById.firstName).toBeDefined()
      expect(employeeById.lastName).toBeDefined()
    })
  })
})
