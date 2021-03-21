export const createIsFavouritedSelector = id => state => state.favourites.favourites.findIndex(val => val === id) > -1
