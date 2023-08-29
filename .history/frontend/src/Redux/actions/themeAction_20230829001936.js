import { THEME_MODE } from "../constants/themeConstant"

import { THEME_MODE }

export const toggleActionTheme = () => (dispatch)=> {
    dispatch({ type: THEME_MODE })
}