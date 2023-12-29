import React, { ReactElement, useEffect } from 'react'
import Meta from '../components/Meta'
import { useTheme } from '@mui/material/styles'
import {
  CardWrapper,
  VoteCard
} from '../components/CustomMuiElement/CardElement'
import CustomLinearProgressBar from '../components/CustomMuiElement/CustomLinearProgressBar'

export default function HomePage(): ReactElement {
  const theme = useTheme()
  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <>
      <Meta
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet"
        name="Lorem ipsum dolor sit amet"
      />
      <CardWrapper
        children={
          <>
            <VoteCard />
          </>
        }
        style={{ marginTop: '2.6rem', marginBottom: '1.6rem' }}
      />
      <CustomLinearProgressBar
        type="success"
        title="support"
        voteCount={9000000}
      />
    </>
  )
}
