export const FETCH_FAVOURITES_TYPE = 'FETCH_FAVOURITES'
export const SAVE_FAVOURITE_TYPE = 'SAVE_FAVOURITE'
export const DELETE_FAVOURITE_TYPE = 'DELETE_FAVOURITE'
export const TOGGLE_FAVOURITE_TYPE = 'TOGGLE_FAVOURITE'

export const fetchFavouritesActionCreator = promise => ({
  type: FETCH_FAVOURITES_TYPE,
  payload: promise
})

export const saveFavouriteActionCreator = promise => ({
  type: SAVE_FAVOURITE_TYPE,
  payload: promise
})

export const deleteFavouriteActionCreator = promise => ({
  type: DELETE_FAVOURITE_TYPE,
  payload: promise
})

export const toggleFavouriteActionCreator = (entityId) => ({
  type: TOGGLE_FAVOURITE_TYPE,
  payload: entityId
})
