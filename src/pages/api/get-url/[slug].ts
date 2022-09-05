// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../server/db/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug'];

  if (!slug || typeof slug !== 'string') {
    return res.status(404).json({ error: 'Missing slug' });
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.setHeader('Cache-Control', 's-maxage=10000, stale-while-revalidate');
    return res.status(404).json({ error: 'Not found' });
  }

  return res.json(data);
};

export default handler;
