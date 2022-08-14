import employeeRepository from '../../../src/frameworks/repositories/employee.repository'

describe('Employee repository', () => {
    test('Should return all documents', async () => {
        const cards = await employeeRepository.getByName('kevin-aron-tapia-cruz')
        cards.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
        })
    })
})
