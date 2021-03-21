export const getEventsApiUrl = state => process.env.EVENTS_API_URL || state.config.eventsApi
export const getFavouritesApiUrl = state => process.env.FAVOURITES_API_URL || state.config.favouritesApi
