import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(req) {
  try {
    const { messages } = await req.json()

    // This is the "brain" of the bot. It knows about the studio!
    const systemPrompt = {
      role: 'system',
      content: `You are the digital concierge for Vale & Silva, a premium architecture studio based in Lisbon, Portugal. 
      The studio was founded in 2014 by Zara Mahmood and Elias Silva. They focus on quiet, restrained architecture, specializing in residential, cultural, and adaptive-reuse projects. 
      If a user asks about a project, tell them to check out the Work page. 
      If they ask about hiring the studio, tell them to use the contact form or email hello@valesilva.com. 
      Keep your answers very brief, elegant, and professional. Never invent fake projects or prices.`
    }

    const completion = await groq.chat.completions.create({
      messages: [systemPrompt, ...messages],
      model: 'openai/gpt-oss-120b', // <--- Changed this line
      temperature: 0.5,
      max_tokens: 200,
    })

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { reply: 'Our concierge is currently offline. Please email hello@valesilva.com.' },
      { status: 500 }
    )
  }
}