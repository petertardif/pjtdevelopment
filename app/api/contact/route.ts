import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json() as Record<string, string>
  if (data.website) return NextResponse.json({ ok: true })
  const { website: _hp, ...fields } = data
  await resend.emails.send({
    from: 'contact@pjtdevelopment.com',
    to: 'peter.tardif@gmail.com',
    subject: `New inquiry from ${data.name}`,
    text: Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n'),
  })
  return NextResponse.json({ ok: true })
}
