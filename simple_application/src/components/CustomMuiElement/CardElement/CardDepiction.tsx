import { Box, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { Theme, alpha } from '@mui/material/styles'

const CardDepictionSx = (theme: Theme): SxProps<Theme> => ({
  ...theme.flexCenter,
  padding: '4rem',
  flexDirection: 'column',
  color: theme.palette.common.black,
  '& .article1': {
    borderBottom: `1px solid ${alpha(theme.palette.grey[400], 0.5)}`,
    '& h2': {
      marginBottom: '0.6rem'
    },
    '& p': {
      marginBottom: '4.8rem'
    }
  },
  '& .article2': {
    '& h2': {
      marginTop: '2.4rem',
      marginBottom: '0.6rem'
    }
  }
})

const CardDepiction: React.FC = () => {
  const theme = useTheme()

  return (
    <Box sx={CardDepictionSx(theme)}>
      <div className="article1">
        <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
      <div className="article2">
        <Typography variant="h2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
        <Typography variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Typography>
      </div>
    </Box>
  )
}

export default CardDepiction
