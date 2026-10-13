'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  // Problem 4: hardcoded fallback key — security risk
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'sk-hardcoded-key-123abc'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full border rounded px-3 py-2 h-32"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {status === 'sent' && <p className="text-green-600">¡Mensaje enviado!</p>}
      {status === 'error' && <p className="text-red-600">Error al enviar. Intenta de nuevo.</p>}
    </form>
  )
}
