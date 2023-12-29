import { Box, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { ButtonReject, ButtonSuccess } from '../ButtonSets'
import { Theme } from '@mui/material/styles'

const VoteCardSx = (theme: Theme): SxProps<Theme> => ({
  ...theme.flexCenter,
  justifyContent: 'space-between',
  padding: '1.6rem  4rem 1.6rem 2.4rem',
  '& h2': {
    width: '100%',
    whiteSpace: 'nowrap'
  },
  '& .vote': {
    textAlign: 'right',
    marginLeft: '37.5rem',
    marginRight: '4rem'
  },
  '& .btnGroup': { display: 'flex', gap: '0.8rem' }
})

const VoteCard: React.FC = () => {
  const theme = useTheme()

  return (
    <Box sx={VoteCardSx(theme)}>
      <Typography variant="h2" color={theme.palette.common.black}>
        Your Voting
      </Typography>
      <div className="vote">
        <Typography variant="subtitle1" color={theme.palette.common.black}>
          Voting Power
        </Typography>
        <Typography variant="h2" color={theme.palette.common.black}>
          00,000.00 VOTE
        </Typography>
      </div>
      <div className="btnGroup">
        <ButtonSuccess children="success" />
        <ButtonReject children="reject" />
      </div>
    </Box>
  )
}

export default VoteCard
