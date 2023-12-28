import { Box, CssBaseline } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Main } from './style'
import React from 'react'
import { Theme } from '@mui/material/styles'
// ==============================|| MAIN LAYOUT ||============================== //

const MainSx = (theme: Theme) => ({
  height: '100%',
  overflow: 'scroll',
  minHeight: '100vh',
  background: theme.palette.common.white
})
interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <>
      <Box sx={MainSx}>
        <CssBaseline />
        <Main theme={theme}>{children}</Main>
      </Box>
    </>
  )
}

export default MainLayout
