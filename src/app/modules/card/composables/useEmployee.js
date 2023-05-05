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

  const updateVisitCount = async (id, fieldToUpdate) => {
    const cookieName = `${COOKIE__NAME__VISTED}-${fieldToUpdate}-${id}`
    const exisitsCookie = getCookie(cookieName)
    if (exisitsCookie) return
    setCoockieVisit(cookieName)
    await store.dispatch('card/updateCountVisits', { id, fieldToUpdate })
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

  const geoFind = (employeeId) => {
    if (!navigator.geolocation) {
      return 'Cannot geolocate'
    }

    const cookieName = `geolocation-${employeeId}`
    const exisitsCookie = getCookie(cookieName)
    if (exisitsCookie) return
    setCoockieVisit(cookieName)

    const coordinates = navigator.geolocation.getCurrentPosition((position) => {
      store.dispatch('card/geoFindUser', {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    }, () => {
      return 'Geolocation API not working'
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    }
    )

    return coordinates
  }

  return {
    getEmployee,
    updateVisitCount,
    geoFind,
    isLoading: computed(() => store.getters['card/isLoading'])
  }
}

export default useEmployee
