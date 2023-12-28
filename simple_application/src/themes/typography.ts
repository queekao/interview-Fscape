/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
import { ThemeOption } from './themeOptions'
export default function themeTypography(theme: ThemeOption): any {
  return {
    fontFamily: theme?.fontFamily,
    h4: {
      fontSize: '1.0rem',
      color: theme.colors.textDark,
      fontWeight: 400,
      whiteSpace: 'break-spaces'
    },
    h3: {
      fontWeight: 400,
      color: theme.colors.textDark,
      fontSize: '1.2rem',
      whiteSpace: 'break-spaces'
    },
    h2: {
      fontSize: '1.4rem',
      color: theme.colors.textDark,
      fontWeight: 400,
      whiteSpace: 'break-spaces'
    },
    h1: {
      fontSize: '2.4rem',
      color: theme.colors.textDark,
      fontWeight: 400,
      whiteSpace: 'break-spaces'
    },
    body1: {
      fontSize: '1.2rem',
      color: theme.colors.textDark,
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      fontSize: '1.0rem',
      color: theme.colors.textDark,
      fontWeight: 400,
      lineHeight: '1.334em'
    }
  }
}
