// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: any,
  res: any
) {
  
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ msg:method });
      break;
    case 'PUT':
      res.status(200).json({ msg:method });
      break;
    default:
      res.setHeader("Allow", ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
