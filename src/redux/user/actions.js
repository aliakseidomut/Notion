import Api from "../../utils/api"

export const fetchUser = ({ email, password }) => async dispatch => {
    dispatch({ type: "USER/FETCH/START" })
    try {
        const user = await Api.getUserPromise({ email, password })
        
        if(!user){
            throw new Error('Invalid data');
        }

        dispatch({ type: "USER/FETCH/SUCCESS", payload: user })
    } catch (error) {
        dispatch({ type: "USER/FETCH/ERROR", payload: error.message })
    }
}