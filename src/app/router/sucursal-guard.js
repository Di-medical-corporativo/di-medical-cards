const checkSucursalParam = (to, from, next) => {
    const sucursals = ['sur', 'corporativo']
    const { sucursal } = to.params
    if (!sucursals.includes(sucursal)) {
        next({ name: 'not-found' })
    }
    next()
}

export default checkSucursalParam
