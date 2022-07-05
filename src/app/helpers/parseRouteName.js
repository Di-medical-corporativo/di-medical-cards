export default (routeName) => {
    const splittedName = routeName.split('-')
    const parsedName = []
    splittedName.forEach(e => parsedName.push(e.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')))
    return parsedName.join(' ')
}