import { Box, Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import CustomLinearProgressBar from '../CustomLinearProgressBar'
import { Theme, alpha } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const VoteResultsSx = (theme: Theme): SxProps<Theme> => ({
  ...theme.flexCenter,
  padding: '1.6rem 2.4rem',
  color: theme.palette.common.black,
  flexDirection: 'column',
  '& .container': {
    // paddingTop: '2.4rem'
    '& .colItem': {
      ...theme.flexCenter,
      justifyContent: 'space-between',
      marginBottom: '0.8rem',
      '& .label': {
        ...theme.flexCenter,
        gap: '0.4rem'
      },
      '& .icon': {
        // ...theme.flexCenter,
        color: theme.palette.success.main,
        marginLeft: '0.4rem'
      }
    }
  }
})

const VoteResults: React.FC = () => {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          borderBottom: `1px solid ${alpha(theme.palette.grey[400], 0.5)}`,
          paddingBottom: '1.6rem',
          margin: '1.6rem 2.4rem'
        }}
      >
        Voting results
      </Typography>
      <Box sx={VoteResultsSx(theme)}>
        <Grid container spacing={2} className="container">
          <Grid item xs={12} sm={6}>
            <CustomLinearProgressBar
              type="success"
              voteCount={9000000}
              title="support"
              style={{ marginBottom: '2.4rem', width: '36rem' }}
            />
            <CustomLinearProgressBar
              type="error"
              voteCount={1000000}
              title="reject"
              style={{ width: '36rem' }}
            />
            <Typography
              variant="h3"
              sx={{
                textDecoration: 'underline',
                width: '8rem',
                marginTop: '2.4rem'
              }}
            >
              View all votes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ paddingLeft: '15.6rem !important' }}>
            <div className="colItem">
              <Typography variant="subtitle1">Quorum</Typography>
              <Typography variant="h3">
                Reached
                <span className="icon">
                  <CheckCircleIcon />
                </span>
              </Typography>
            </div>
            <div className="colItem">
              <div className="label">
                <Typography variant="subtitle1">Current Votes</Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>
                  Required 000K
                </Typography>
              </div>
              <Typography variant="h3">000K</Typography>
            </div>
            <div className="colItem">
              <Typography variant="subtitle1">Differential</Typography>
              <Typography variant="h3">
                Reached
                <span className="icon">
                  <CheckCircleIcon />
                </span>
              </Typography>
            </div>
            <div className="colItem">
              <div className="label">
                <Typography variant="subtitle1">
                  Current Differential
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>
                  Required 000K
                </Typography>
              </div>
              <Typography variant="h3">00.00K</Typography>
            </div>
            <div className="colItem">
              <Typography variant="subtitle1">Total Voting Power</Typography>
              <Typography variant="h3">00,000,000</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default VoteResults
