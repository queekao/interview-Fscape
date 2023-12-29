import React, { ReactElement } from 'react'
import Meta from '../components/Meta'
import {
  CardWrapper,
  VoteCard,
  CardDepiction,
  VoteResults
} from '../components/CustomMuiElement/CardElement'

export default function HomePage(): ReactElement {
  return (
    <>
      <Meta
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet"
        name="Lorem ipsum dolor sit amet"
      />
      <CardWrapper
        children={<VoteCard />}
        style={{ marginTop: '2.6rem', marginBottom: '1.6rem' }}
      />
      <CardWrapper children={<VoteResults />} />
      <CardWrapper
        style={{ marginTop: '1.6rem' }}
        children={<CardDepiction />}
      />
    </>
  )
}
