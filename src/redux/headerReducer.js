import { SET_SELECTED_KEY, START_LOADING, STOP_LOADING } from "../constant/constant"

const initialHeaderKey = {
    selectedKey: 'Home',
    isLoading: true,
}

export default (state = initialHeaderKey, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_KEY:
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            return { ...state, selectedKey: payload }
        case START_LOADING:
            return { ...state, isLoading: true }
        case STOP_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}
