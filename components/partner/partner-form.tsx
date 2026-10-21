'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'

const inputClass =
  'rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring'

export function PartnerForm() {
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
        <h3 className="font-heading text-xl font-semibold tracking-tight">Enquiry received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for your interest in partnering with Dynamic Communication. Our partnerships
          team will be in touch within two business days.
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
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <input id="company" name="company" type="text" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <input id="country" name="country" type="text" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="partnerType" className="text-sm font-medium">
            Partnership type
          </label>
          <select id="partnerType" name="partnerType" className={inputClass}>
            <option>Infrastructure owner / operator</option>
            <option>Engineering company</option>
            <option>Main contractor</option>
            <option>System integrator</option>
            <option>Technology / OEM partner</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="area" className="text-sm font-medium">
            Area of interest
          </label>
          <select id="area" name="area" className={inputClass}>
            <option>Connectivity & Telecommunications</option>
            <option>Aviation & Critical Infrastructure</option>
            <option>Electrical & Power Systems</option>
            <option>Digital Infrastructure</option>
            <option>Intelligent & Security Systems</option>
            <option>Renewable Energy</option>
            <option>Multiple disciplines</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about the opportunity
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
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
            Submit partnership enquiry
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
