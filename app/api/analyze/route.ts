
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import formidable from 'formidable';
import pdf from 'pdf-parse';
import { Document, Packer, Paragraph } from 'docx';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const fileBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  let text = '';
  if (file.type === 'application/pdf') {
    const data = await pdf(buffer);
    text = data.text;
  } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    // This is a placeholder for docx parsing, as it's more complex.
    // You would typically use a library like 'mammoth' or 'docx' to extract text.
    text = 'DOCX parsing not yet implemented.';
  } else {
    return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Analyze the following CV and provide feedback on how to improve it. Also, suggest 5 job titles that would be a good fit for this candidate:\n\n${text}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = await response.text();
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error analyzing CV' }, { status: 500 });
  }
}
