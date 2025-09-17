
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.JSEARCH_API_KEY || '', // Add your Jsearch API key here
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}`, options);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching jobs' }, { status: 500 });
  }
}
