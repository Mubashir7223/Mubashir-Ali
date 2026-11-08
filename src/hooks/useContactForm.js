import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function useContactForm() {
  const [status, setStatus] = useState('idle')

  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('missing-config')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return { status, submit }
}
