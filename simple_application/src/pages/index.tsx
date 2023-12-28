import Grid from '@mui/material/Grid'
import React, { ReactElement, useEffect } from 'react'
import Meta from '../components/Meta'
import { useTheme } from '@mui/material/styles'
import { CustomCard } from '../components/CustomMuiElement/CustomCard'
import CustomLinearProgressBar from '../components/CustomMuiElement/CustomLinearProgressBar'
const learningResources = {
  title: 'Documentation',
  description: 'Find in-depth information about Next.js features and API.',
  href: 'https://nextjs.org/docs'
}

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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CustomCard {...learningResources} />
          <CustomLinearProgressBar value={90} />
        </Grid>
      </Grid>
    </>
  )
}
