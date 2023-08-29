


export const modeReducer = (state = (toggleActive : true), action) => {
    switch(action.type) {
        case THEME
        return {
            ...state,
            toggleActive: state.toggleActive,
            mode : state.toggleActive ? "light" : "dark"
        }
        default:
            return state;
    }
}