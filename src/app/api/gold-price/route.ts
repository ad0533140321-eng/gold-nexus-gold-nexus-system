import { NextResponse } from 'next/server';
import { getLiveGoldPrice } from '@/lib/gold-price-service';

// This configures the route to be revalidated every 60 seconds.
// It's a good balance: users get near-live data, but we're not hitting
// our service on every single request. The service itself will only hit the
// external API once per hour.
export const revalidate = 60;

export async function GET() {
  try {
    const goldPriceData = await getLiveGoldPrice();
    return NextResponse.json(goldPriceData);
  } catch (error) {
    console.error('[API/GOLD-PRICE] Error fetching gold price:', error);
    return NextResponse.json(
      { message: 'Failed to fetch gold price data.' },
      { status: 500 }
    );
  }
}
