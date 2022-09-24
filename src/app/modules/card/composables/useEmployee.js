import { useStore } from 'vuex'

const useEmployee = () => {
  const store = useStore()

  const getEmployee = async (id) => {
    if (checkIfEmployeeExistsInLocalStore(id)) {
      return JSON.parse(localStorage.getItem(id))
    }
    const employee = await store.dispatch('card/getEmployeeById', id)
    saveEmployeeToLocalStore(employee, id)
    return employee
  }

  const saveEmployeeToLocalStore = (employee, id) => {
    localStorage.setItem(id, JSON.stringify(employee))
  }

  const checkIfEmployeeExistsInLocalStore = (id) => {
    return localStorage.getItem(id)
  }

  return {
    getEmployee
  }
}

export default useEmployee
