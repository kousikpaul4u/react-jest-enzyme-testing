

export const success = (state = {}, action) => {
    switch (action.type) {
        case "SET_SUCCESS":
            return { ...state, success: action.payload };
        default:
            return state;
    }
};