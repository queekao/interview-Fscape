import React from 'react'
import { styled, alpha, Theme, useTheme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps
} from '@mui/material/LinearProgress'
import { Box, Typography } from '@mui/material'
// import { withStyles } from '@mui/styles' // Deprecated in Mui 5

interface CustomLinearProgressProps {
  voteCount: number
  title: string
  type: 'success' | 'error'
  style?: React.CSSProperties
}
// We only need 'type' attribute for LinearProgress
type CustomLinearProgressTypeProp = Pick<CustomLinearProgressProps, 'type'>

const BarWrapperSx = (theme: Theme): SxProps<Theme> => ({
  position: 'relative',
  width: '100%',
  height: '3.2rem',
  ...theme.flexCenter,
  justifyContent: 'space-between',
  '& .statusLabel': {
    textTransform: 'capitalize',
    lineHeight: '1.666',
    marginLeft: '1.6rem'
  },
  '& .statusContent': {
    ...theme.flexCenter,
    gap: '1.6rem',
    marginRight: '1.6rem'
  }
})
type ExtendedLinearProgressProps = LinearProgressProps &
  CustomLinearProgressTypeProp
// Child custom component
const CustomLinearProgress = styled(LinearProgress, {
  shouldForwardProp: prop => prop !== 'type'
})<ExtendedLinearProgressProps>(({ theme, type }) => ({
  height: '3.2rem',
  borderRadius: '4px',
  width: '100%',
  position: 'absolute',
  border: `1px solid ${theme.palette.grey[100]}`,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha(theme.palette.grey[100], 0.1)
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: '5px',
    backgroundColor:
      (type === 'success' && theme.palette.success.main) ||
      (type === 'error' && theme.palette.error.main),
    opacity: 0.25
  }
}))

// Parent component
const CustomLinearProgressBar: React.FC<CustomLinearProgressProps> = ({
  voteCount,
  title,
  type,
  style
}) => {
  const value = voteCount / 100000
  const theme = useTheme()
  const formattedVoteCount = voteCount.toLocaleString()

  return (
    <Box sx={BarWrapperSx(theme)} style={style}>
      <Typography className="statusLabel" variant="h3">
        {title}
      </Typography>
      <CustomLinearProgress variant="determinate" value={value} type={type} />
      <div className="statusContent">
        <Typography variant="body2">{formattedVoteCount} VOTE</Typography>
        <Typography className="percentage" variant="h3">
          {value}%
        </Typography>
      </div>
    </Box>
  )
}

export default CustomLinearProgressBar
