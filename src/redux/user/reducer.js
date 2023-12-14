const DEFAULT_STATE = {
    user: null,
    error: null,
    loading: true
}

export const reducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "USER/FETCH/START":
            return {...state, loading: true, error: null}
        case "USER/FETCH/SUCCESS":
            return {...state, loading: false, user: payload}
        case "USER/FETCH/ERROR":
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}