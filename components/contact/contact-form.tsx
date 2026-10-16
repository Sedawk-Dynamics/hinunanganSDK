'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('submitted')
    }, 900)
  }

  if (status === 'submitted') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold tracking-tight">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. A member of our team will get back to you within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg border border-border bg-card p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          What do you need help with?
        </label>
        <select
          id="subject"
          name="subject"
          className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option>Connectivity & Telecommunications</option>
          <option>Aviation & Critical Infrastructure</option>
          <option>Electrical & Power Systems</option>
          <option>Digital Infrastructure</option>
          <option>Intelligent & Security Systems</option>
          <option>Advanced Technology & Data Intelligence</option>
          <option>Renewable Energy</option>
          <option>Careers</option>
          <option>General enquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
