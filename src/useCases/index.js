import employeeRepository from './employee'
import productRepository from './product'
import technicalRepository from './technicalSheets'
import brandRepository from './brands'

export default {
  ...employeeRepository,
  ...productRepository,
  ...technicalRepository,
  ...brandRepository
}
