class Employee {
  constructor (
    firstName,
    lastName,
    description1,
    description2,
    image,
    job,
    phone,
    sucursal,
    email,
    visitsId
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.description1 = description1
    this.description2 = description2
    this.image = image
    this.job = job
    this.phone = phone
    this.sucursal = sucursal
    this.email = email
    this.visitsId = visitsId
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

const employeeConverter = {
  toFirestore: (employee) => {
    return {
      ...employee
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new Employee(
      data.name,
      data.last,
      data.description1,
      data.description2,
      data.image,
      data.job,
      data.phone,
      data.sucursal,
      data.mail,
      data.visitsId
    )
  }
}

export {
  Employee,
  employeeConverter
}
