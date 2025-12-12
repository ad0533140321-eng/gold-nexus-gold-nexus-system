// app/api/users/me/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';
import { prisma } from '@/../lib/db';
import fs from 'fs';
import path from 'path';

// Load the public key for verification
const publicKey =
  process.env.NODE_ENV === 'production'
    ? process.env.JWT_PUBLIC_KEY!
    : fs.readFileSync(path.join(process.cwd(), 'public_key.pem'), 'utf8');

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
      return NextResponse.json({ error: 'Unauthorized: No access token' }, { status: 401 });
    }

    if (!publicKey) {
      throw new Error('JWT_PUBLIC_KEY is not available');
    }

    let decoded;
    try {
      decoded = jwt.verify(accessToken, publicKey, { algorithms: ['RS256'] }) as { userId: string };
    } catch (err) {
      // This could be a separate call to the /refresh endpoint in a real client
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    const userId = decoded.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      // Include the user's related orders, and for each order, include the order items and their product details
      include: {
        orders: {
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc', // Show most recent orders first
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // IMPORTANT: Never send the password hash to the client
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Get User Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
