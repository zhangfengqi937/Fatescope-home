import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  // TODO: Validate & send via your provider (Resend/SES/Webhook)
  console.log("contact payload:", body);
  return NextResponse.json({ ok: true });
}