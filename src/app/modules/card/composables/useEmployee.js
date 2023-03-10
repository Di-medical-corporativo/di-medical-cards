import { computed } from 'vue'
import { useStore } from 'vuex'

const COOKIE__NAME__VISTED = 'vcard-visited'

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

  const updateVisitCount = async (id) => {
    const cookieName = getCookie(`${COOKIE__NAME__VISTED}-id`)
    if (getCookie(cookieName)) return

    setCoockieVisit(cookieName)
    await store.dispatch('card/updateCountVisits', id)
  }

  const setCoockieVisit = async (cookieToSet) => {
    const cookieDate = new Date()
    cookieDate.setTime(cookieDate.getTime() + (365 * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + cookieDate.toUTCString()
    document.cookie = cookieToSet + '=' + 'visited' + ';' + expires + ';path=/'
  }

  const getCookie = (cname) => {
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieSplited = decodedCookie.split(';')
    for (let i = 0; i < cookieSplited.length; i++) {
      let cookie = cookieSplited[i]
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(name) === 0) {
        return true
      }
    }
    return false
  }

  return {
    getEmployee,
    updateVisitCount,
    isLoading: computed(() => store.getters['card/isLoading'])
  }
}

export default useEmployee
