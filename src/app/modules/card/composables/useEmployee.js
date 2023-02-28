import { computed } from 'vue'
import { useStore } from 'vuex'

const useEmployee = () => {
  const store = useStore()

  const getEmployee = async (id) => {
    if (checkIfEmployeeExistsInLocalStore(id)) {
      const savedEmployee = JSON.parse(sessionStorage.getItem(id))
      store.commit('card/setEmployee', savedEmployee)
      return savedEmployee
    }
    const employee = await store.dispatch('card/getEmployeeById', id)
    saveEmployeeToLocalStore(employee, id)
    return employee
  }

  const saveEmployeeToLocalStore = (employee, id) => {
    sessionStorage.setItem(id, JSON.stringify(employee))
  }

  const checkIfEmployeeExistsInLocalStore = (id) => {
    return sessionStorage.getItem(id)
  }

  return {
    getEmployee,
    isLoading: computed(() => store.getters['card/isLoading'])
  }
}

export default useEmployee
