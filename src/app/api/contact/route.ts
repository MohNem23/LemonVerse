import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  topic?: unknown;
  message?: unknown;
};

function toText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      message: "Contact API stub is ready.",
    },
    { status: 200 },
  );
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  const name = toText(body.name);
  const email = toText(body.email);
  const organization = toText(body.organization);
  const topic = toText(body.topic);
  const message = toText(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        error: "Name, email, and message are required.",
      },
      { status: 422 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please enter a valid email address.",
      },
      { status: 422 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Message received. Delivery wiring can be added next.",
      requestId: globalThis.crypto?.randomUUID?.() ?? `contact_${Date.now()}`,
      receivedAt: new Date().toISOString(),
      data: {
        name,
        email,
        organization,
        topic,
        message,
      },
    },
    { status: 202 },
  );
}
