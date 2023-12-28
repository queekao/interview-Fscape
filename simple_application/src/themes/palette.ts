/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
import { ThemeOption } from './themeOptions'
export default function themePalette(theme: ThemeOption): any {
  return {
    // mode: theme?.customization?.navType || '', // To define dark or light
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain
      // dark: theme.colors?.secondaryDark,
    },
    shadow: {
      100: theme.colors?.shadow100,
      200: theme.colors?.shadow200
    },

    grey: {
      white: theme.colors?.white,
      dark: theme.colors?.dark
    },
    text: {
      primary: theme.colors.dark
    }
  }
}
