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

  if(!emails) return <div>Loading....</div>
  return (
    <div className="email-index">
    <ul className="email-list">
        {emails.map(email => (
            <li key={email.id} className={`email-item ${email.isRead ? 'read' : 'unread'}`}>
                <span className="email-from">{email.from}</span>
                <span className="email-subject">{email.subject}</span>
                <span className="email-body">{email.body}</span>
                <span className="email-date">{new Date(email.sentAt).toLocaleDateString()}</span>
            </li>
        ))}
    </ul>
</div>
  )
}