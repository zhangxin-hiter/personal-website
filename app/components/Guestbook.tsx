"use client";

import { useEffect, useState } from 'react'

type GuestbookEntry = {
  id: string
  name: string
  message: string
  date: string
}

export default function Guestbook(): any {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('/api/guestbook')
      .then((r) => r.json())
      .then((data) => setEntries(data as GuestbookEntry[]))
      .catch(() => {})
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault()
    const payload = { name: name || 'Guest', message }
    const res = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      const updated = await fetch('/api/guestbook').then((r) => r.json())
      setEntries(updated as GuestbookEntry[])
      setName('')
      setMessage('')
    }
  }

  return (
    <section className="guestbook">
      <h3>Guestbook</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            <strong>{e.name}</strong> - {e.message} <em>({new Date(e.date).toLocaleString()})</em>
          </li>
        ))}
      </ul>
    </section>
  )
}
