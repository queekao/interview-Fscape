import { Box, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { ButtonBack, ButtonStatus } from './CustomMuiElement/ButtonSets'
import { SxProps } from '@mui/system'
import { Theme, useTheme } from '@mui/material/styles'

const HeaderSx = (theme: Theme): SxProps<Theme> => ({
  minWidth: 300,
  width: '100%',
  '& .title': {
    ...theme.flexCenter,
    justifyContent: 'start',
    gap: '1.6rem',
    marginBottom: '1.1rem',
    marginTop: '2rem'
  }
})
export const Header = (): ReactElement => {
  const theme = useTheme()
  return (
    <Box sx={HeaderSx(theme)}>
      <ButtonBack children="back" />
      <div className="title">
        <Typography variant="h1">Lorem ipsum dolor sit amet</Typography>
        <ButtonStatus children="active" />
      </div>
      <Typography variant="subtitle1">Active ends in : 2 days</Typography>
    </Box>
  )
}
