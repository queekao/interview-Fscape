export const Colors = {
  paper: '#ffffff',

  // primary
  primaryLight: '#15B48E40',
  primaryMain: '#15B48E',
  // primaryDark: '',
  primary200: '#48DA82',

  // secondary
  secondaryLight: '#EF646140',
  secondaryMain: '#EF6461',
  // secondaryDark: '',

  // grey
  white: '#FFFFFF',
  dark: '#2A2B38',
  //gradient
  //shadow
  shadow100: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  shadow200: '0px 3px 10px #00000061',
  // text
  textDark: '#2A2B38'
}

// For all the theme type definition
export interface ThemeOption {
  colors: typeof Colors
  // palette
  navType?: string
  // typography
  fontFamily?: string
  // border radis
  borderRadisRound?: string
  borderRadisSharp?: string
  borderRadisCircle?: string
}
