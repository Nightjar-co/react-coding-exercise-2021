/* global fetch:false */
import get from 'lodash/get'
import {
  fetchFavouritesActionCreator, deleteFavouriteActionCreator, saveFavouriteActionCreator,
  TOGGLE_FAVOURITE_TYPE, REHYDRATED
} from '../actions'
import { getFavouritesApiUrl } from '../selectors'

const fetchFavourites = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await response.json()
  const favourites = data

  if (!response.ok) {
    const error = new Error(get(data, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

const saveFavourite = async (apiUrl, entityId) => {
  const response = await fetch(apiUrl + '/' + entityId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await response.json()
  const favourites = data

  if (!response.ok) {
    const error = new Error(get(data, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

const deleteFavourite = async (apiUrl, entityId) => {
  const response = await fetch(apiUrl + '/' + entityId, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await response.json()
  const favourites = data

  if (!response.ok) {
    const error = new Error(get(data, ['error', 'message']) || 'Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

export default store => next => action => {
  const ret = next(action)
  const state = store.getState()
  const apiUrl = getFavouritesApiUrl(state)
  if (action.type === REHYDRATED) {
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  } else if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const state = store.getState()
    const entityId = action.payload
    if (state.favourites.favourites.findIndex(val => val === entityId) > -1) {
      store.dispatch(deleteFavouriteActionCreator(deleteFavourite(apiUrl, entityId)))
    } else {
      store.dispatch(saveFavouriteActionCreator(saveFavourite(apiUrl, entityId)))
    }
  }
  return ret
}
