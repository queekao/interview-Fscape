import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
export const ButtonSuccessSx = (theme: Theme): SxProps<Theme> => ({
  fontWeight: 600,
  borderRadius: '8px',
  background: theme.palette.success.main,
  color: theme.palette.common.white,
  padding: '1rem 2.5rem',
  fontSize: '1.2rem',
  width: '10rem',
  textTransform: 'capitalize'
})
export const ButtonRejectSx = (theme: Theme): SxProps<Theme> => ({
  fontWeight: 600,
  borderRadius: '8px',
  background: theme.palette.error.main,
  color: theme.palette.common.white,
  padding: '1rem 2.5rem',
  fontSize: '1.2rem',
  width: '10rem',
  textTransform: 'capitalize'
})
export const ButtonBackSx = (theme: Theme): SxProps<Theme> => ({
  fontSize: '1.2rem',
  color: theme.palette.common.black,
  textTransform: 'capitalize',
  '& .children': {
    fontWeight: 400,
    marginLeft: '0.8rem'
  }
})
export const ButtonStatusSx = (theme: Theme): SxProps<Theme> => ({
  fontSize: '1.2rem',
  padding: '0.3rem 0.8rem',
  borderRadius: '4px',
  color: theme.palette.common.white,
  background: theme.palette.success.light,
  textTransform: 'capitalize'
})
