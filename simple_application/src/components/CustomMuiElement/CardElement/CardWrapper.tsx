import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import React, { ReactElement, ReactNode } from 'react'

interface CardWrapperProps {
  style?: React.CSSProperties // This is for the custom style of the button
  children: ReactNode | string
  actionContent?: string
}
const CardSx = () => ({
  minWidth: 300,
  boxShadow: 'none',
  borderRadius: '12px',
  // width: '88rem',
  '& .MuiCardContent-root': {
    padding: '0 !important'
  }
})
export const CardWrapper = ({
  children,
  actionContent,
  style
}: CardWrapperProps): ReactElement => {
  return (
    <Card sx={CardSx} style={style}>
      <CardContent>{children}</CardContent>
      {actionContent && <CardActions>{actionContent}</CardActions>}
    </Card>
  )
}
