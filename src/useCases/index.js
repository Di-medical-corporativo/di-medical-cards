import employeeRepository from './employee'
import productRepository from './product'

export default {
  ...employeeRepository,
  ...productRepository
}
