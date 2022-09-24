import useEmployee from '../../../../src/app/modules/card/composables/useEmployee'
import testUser from '../../mock-data/testUser'

const mockStore = {
  dispatch: jest.fn().mockReturnValue(testUser),
  commit: jest.fn()
}

jest.mock('vuex', () => ({
  useStore: () => mockStore
}))

describe('useEmployee composable', () => {
  let mockStorage = {}

  beforeEach(() => {
    jest.clearAllMocks()
    mockStorage = {}
  })

  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockStorage[key] = value
    })

    global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key])
  })

  afterAll(() => {
    global.Storage.prototype.setItem.mockReset()
    global.Storage.prototype.getItem.mockReset()
  })

  test('getEmployee function, should return employee by id', async () => {
    const { getEmployee } = useEmployee()
    const employee = await getEmployee('0W2w0TFoyn3AbUf10hYn')
    expect(employee).toEqual(testUser)
  })

  test('getEmployee function, should call mockStore dispatch', async () => {
    const { getEmployee } = useEmployee()
    await getEmployee('0W2w0TFoyn3AbUf10hYn')
    expect(mockStore.dispatch).toHaveBeenCalled()
    expect(mockStore.dispatch).toBeCalledWith('card/getEmployeeById', '0W2w0TFoyn3AbUf10hYn')
  })

  test('getEmployee function, should save employee to localStorage when it calls getEmployee', async () => {
    const { getEmployee } = useEmployee()
    await getEmployee('0W2w0TFoyn3AbUf10hYn')
    expect(global.Storage.prototype.setItem).toHaveBeenCalled()
  })

  test('getEmployee function, if employee already exists in localStorage, it doesnt make request', async () => {
    const { getEmployee } = useEmployee()
    await getEmployee('0W2w0TFoyn3AbUf10hYn')

    await getEmployee('0W2w0TFoyn3AbUf10hYn')
    expect(global.Storage.prototype.getItem).toHaveBeenCalled()
  })

  test('getEmployee function, should save to mockStorage', async () => {
    const { getEmployee } = useEmployee()
    await getEmployee('0W2w0TFoyn3AbUf10hYn')
    const parsedData = JSON.parse(mockStorage['0W2w0TFoyn3AbUf10hYn'])
    // expect(global.Storage.prototype.setItem).toHaveBeenCalledWith({})
    expect(parsedData).toEqual(testUser)
  })

  test('getEmployee function, should return value from localStorage when already set', async () => {
    const { getEmployee } = useEmployee()
    await getEmployee('0W2w0TFoyn3AbUf10hYn')

    const employee = await getEmployee('0W2w0TFoyn3AbUf10hYn')
    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(3)
    expect(employee).toEqual(testUser)
  })
})
