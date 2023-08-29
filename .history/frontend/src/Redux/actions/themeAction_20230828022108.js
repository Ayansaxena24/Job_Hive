import { THEME_MODE } from "../constants/themeConstant"



export const togglActionTheme = () => (dispatch)=> {
    dispatch({ type: THEME_MODE })
}