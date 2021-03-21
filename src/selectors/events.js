export const isEventsBusy = state => !!state.events.busy
export const getEvents = state => state.events.events
export const getEventsCount = state => state.events.events.length ? state.events.events.length : null
export const getEventsError = state => state.events.error
export const isEventsReady = state => !isEventsBusy(state) && getEvents(state).length > 0 && !getEventsError(state)
