import Api from "../../utils/api"

export const fetchNotes = authorId => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        const notes = await Api.getUserNotesPromise(authorId)
        dispatch({ type: "NOTE/FETCH/SUCCESS", payload: notes })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}

export const createNote = ({ title, text, authorId, createdAt }) => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        await Api.createNote({ title, text, authorId, createdAt })
        dispatch({ type: "NOTE/POST/SUCCESS" })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
} 

export const editNote = ({ id, authorId, title, text, createdAt }) => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        await Api.editNote({ id, authorId, title, text, createdAt })
        dispatch({ type: "NOTE/POST/SUCCESS" })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}

export const deleteNote = (id, authorId) => async (dispatch) => {
    dispatch({ type: "NOTE/FETCH/START" });
    try {
      await Api.deleteNote(id);
      await Api.getUserNotesPromise(authorId)
        .then(notes => dispatch({ type: "NOTE/FETCH/SUCCESS", payload: notes }))
    } catch (error) {
      dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message });
    }
};