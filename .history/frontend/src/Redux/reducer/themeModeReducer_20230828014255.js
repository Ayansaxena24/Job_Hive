


export const modeReducer = (state = (toggleActive : true), action) => {
    switch(action.type) {
        
        return {
            ...state,
            toggleActive: state.toggleActive,
            mode : state.toggleActive ? "light" : "dark"
        }
        default:
            return state;
    }
}