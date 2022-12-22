import employeeRepository from './employee'
import productRepository from './product'
import technicalRepository from './technicalSheets'

export default {
  ...employeeRepository,
  ...productRepository,
  ...technicalRepository
}
