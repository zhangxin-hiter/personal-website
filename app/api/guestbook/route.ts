import { NextResponse } from 'next/server'
import { readGuestbook, addGuestbookEntry } from '../../../lib/guestbook'

// GET: return all guestbook entries
export async function GET() {
  const entries = await readGuestbook()
  return NextResponse.json(entries)
}

// POST: add a new guestbook entry
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const entry = {
      id: Date.now().toString(),
      name: body?.name ?? 'Guest',
      message: body?.message ?? '',
      date: new Date().toISOString(),
    }
    await addGuestbookEntry(entry)
    return NextResponse.json({ ok: true, entry })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
