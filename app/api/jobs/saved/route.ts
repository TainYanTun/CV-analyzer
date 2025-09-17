
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next"
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const jobs = await prisma.job.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({ jobs });
}
