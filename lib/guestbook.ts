import fs from 'fs'
import path from 'path'

export type GuestbookEntry = {
  id: string
  name: string
  message: string
  date: string
}

const dataDir = path.resolve(process.cwd(), 'data')
const filePath = path.resolve(dataDir, 'guestbook.json')

async function ensureFile() {
  await fs.promises.mkdir(dataDir, { recursive: true })
  try {
    await fs.promises.access(filePath)
  } catch {
    await fs.promises.writeFile(filePath, '[]', 'utf8')
  }
}

export async function readGuestbook(): Promise<GuestbookEntry[]> {
  try {
    await ensureFile()
    const raw = await fs.promises.readFile(filePath, 'utf8')
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data as GuestbookEntry[]
    return []
  } catch {
    return []
  }
}

export async function addGuestbookEntry(entry: GuestbookEntry): Promise<void> {
  const entries = await readGuestbook()
  // prepend to show newest first
  entries.unshift(entry)
  await fs.promises.writeFile(filePath, JSON.stringify(entries, null, 2), 'utf8')
}

// Utility: reset guestbook data (for testing/local cleanup)
export async function clearGuestbook(): Promise<void> {
  await fs.promises.writeFile(filePath, '[]', 'utf8')
}
