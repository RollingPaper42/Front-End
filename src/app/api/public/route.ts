import { NextResponse } from 'next/server';

import data from './data.json';

export async function GET(request: any) {
  return NextResponse.json(data, { status: 200 });
}
