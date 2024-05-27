import { useState } from "react"
import { useEffect } from "react"
import { emailService } from "../services/email.service"

export function EmailIndex() {

  const [emails, setEmails] = useState(null)

  useEffect(() => {
    loadEmails()
  }, [])

  async function loadEmails() {
    try {
      const emails = await emailService.query()
      setEmails(emails)
    } catch (error) {
      console.log('Having issues with loading emails:', error)
    }
  }

  return (
    <div>
      <h1>Email Index Page</h1>
      <pre>{JSON.stringify(emails, null, 4)}</pre>
    </div>
  )
}
