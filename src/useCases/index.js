import employeeRepository from './employee'
import productRepository from './product'
import technicalRepository from './technicalSheets'
import brandRepository from './brands'
import storiesRepository from './stories'
import catalogueRepository from './catalogues'
import statsRepository from './stats'
import geolocationRepository from './geolocation'

export default {
  ...employeeRepository,
  ...productRepository,
  ...technicalRepository,
  ...brandRepository,
  ...storiesRepository,
  ...catalogueRepository,
  ...statsRepository,
  ...geolocationRepository
}
