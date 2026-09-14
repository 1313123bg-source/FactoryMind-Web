import { NextResponse } from 'next/server';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 4000;

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Невалидна заявка.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Невалидна заявка.' }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = clean(payload.name, MAX_NAME_LENGTH);
  const email = clean(payload.email, MAX_EMAIL_LENGTH);
  const company = clean(payload.company, MAX_COMPANY_LENGTH);
  const message = clean(payload.message, MAX_MESSAGE_LENGTH);
  const website = clean(payload.website, 200);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Моля, въведете име и валиден работен имейл.' }, { status: 400 });
  }

  const to = process.env.DEMO_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.DEMO_FROM_EMAIL;

  if (!to || !apiKey || !from) {
    return NextResponse.json(
      { error: 'Каналът за demo запитвания все още не е конфигуриран.' },
      { status: 503 },
    );
  }

  const emailText = [
    'Ново FactoryMind demo запитване',
    '',
    `Име: ${name}`,
    `Работен имейл: ${email}`,
    `Компания: ${company || 'Не е посочена'}`,
    '',
    'Какво искате да подобрите:',
    message || 'Не е посочено',
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `FactoryMind demo: ${name}`,
        text: emailText,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Не успяхме да изпратим запитването. Опитайте отново след малко.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Не успяхме да се свържем с email услугата. Опитайте отново след малко.' },
      { status: 502 },
    );
  }
}
