// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Maybe for the database query
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): any {
  res.status(200).json({ name: 'John' })
}
