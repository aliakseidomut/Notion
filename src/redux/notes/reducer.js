const DEFAULT_STATE = {
    notes: [],
    error: null,
    loading: true
}

export const reducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "NOTE/FETCH/START":
            return { ...state, error: null, loading: true }
        case "NOTE/FETCH/SUCCESS":
            return { ...state, notes: payload, loading: false }
        case "NOTE/FETCH/ERROR":
            return { ...state, loading: false, error: payload }
        case "NOTE/POST/SUCCESS":
            return { ...state, loading: false }
        default:
            return state
    }
}