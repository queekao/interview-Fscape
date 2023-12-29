// https://mui.com/material-ui/material-icons/?query=error+ -> [mui icon] import Options
import { ButtonBase } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  ButtonSuccessSx,
  ButtonBackSx,
  ButtonRejectSx,
  ButtonStatusSx
} from './_styled'
import React, { ReactElement, MouseEventHandler, ReactNode } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  className?: string // This is for the custom style of the button
  children: ReactNode | string
}

export function ButtonSuccess({
  onClick,
  type = 'button',
  children
}: ButtonProps): ReactElement {
  const theme = useTheme()

  return (
    <ButtonBase sx={ButtonSuccessSx(theme)} onClick={onClick} type={type}>
      {children}
    </ButtonBase>
  )
}

export function ButtonReject({
  onClick,
  type = 'button',
  children
}: ButtonProps): ReactElement {
  const theme = useTheme()
  return (
    <ButtonBase sx={ButtonRejectSx(theme)} onClick={onClick} type={type}>
      {children}
    </ButtonBase>
  )
}
export function ButtonBack({
  onClick,
  type = 'button',
  children
}: ButtonProps): ReactElement {
  const theme = useTheme()
  return (
    <ButtonBase sx={ButtonBackSx(theme)} onClick={onClick} type={type}>
      <ArrowBackIcon />
      <span className="children">{children}</span>
    </ButtonBase>
  )
}
export function ButtonStatus({
  onClick,
  type = 'button',
  children
}: ButtonProps): ReactElement {
  const theme = useTheme()
  return (
    <ButtonBase sx={ButtonStatusSx(theme)} onClick={onClick} type={type}>
      {children}
    </ButtonBase>
  )
}
