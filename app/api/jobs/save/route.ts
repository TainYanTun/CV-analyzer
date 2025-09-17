
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, company, location, description, url } = await req.json();

  if (!title || !company || !location || !description || !url) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const job = await prisma.job.create({
    data: {
      title,
      company,
      location,
      description,
      url,
      userId: session.user.id,
    },
  });

  return NextResponse.json({ job });
}
