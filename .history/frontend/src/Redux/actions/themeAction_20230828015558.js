import { THEME_MODE } from "../constants/themeConstant"



export const toggelActionTheme = () => (dispatch)=> {
    dispatch{ type: THEME_MODE}
}