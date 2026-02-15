import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'guestbook.json');

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

function readGuestbook(): GuestbookEntry[] {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return [];
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading guestbook:', error);
    return [];
  }
}

function writeGuestbook(entries: GuestbookEntry[]): void {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(entries, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing guestbook:', error);
  }
}

export function getGuestbookEntries(): GuestbookEntry[] {
  const entries = readGuestbook();
  return entries.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addGuestbookEntry(name: string, message: string): GuestbookEntry {
  const entries = readGuestbook();
  const newEntry: GuestbookEntry = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2),
    name: name.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };
  entries.push(newEntry);
  writeGuestbook(entries);
  return newEntry;
}
