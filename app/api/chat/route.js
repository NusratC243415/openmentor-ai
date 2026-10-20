import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are OpenMentor AI, a premium mentor for programming students and Hacktoberfest contributors.
CRITICAL FORMATTING RULES:
1. NEVER use ASCII or markdown tables (do NOT use pipe symbols |---|). Tables break the display.
2. Structure your answer with clear bold headers, emojis, and clean bullet points.
3. Use this structure:
   📌 Summary (সহজ কথায় মূল বিষয়)
   ⚡ Key Differences / Points (সহজ বুলেট পয়েন্ট আকারে)
   💻 Code Example (ছোট ও পরিষ্কার কোড)
   🚀 Pro-Tip for Open-Source / Best Practice
4. Keep the text clean, well-spaced, and very easy to read on screen.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'openai/gpt-oss-20b',
    });

    const reply = chatCompletion.choices[0]?.message?.content || 'কোনো উত্তর পাওয়া যায়নি।';
    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'AI রেসপন্স আনতে সমস্যা হয়েছে।' }, { status: 500 });
  }
}