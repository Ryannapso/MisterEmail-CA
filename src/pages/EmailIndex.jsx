import { SideBar } from "../cmps/SideBar"
import { useState, useEffect } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"

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

  if (!emails) return <div>Loading....</div>

  return (
    <div className="email-index">
      <SideBar />
      <EmailList emails={emails} />
    </div>
  )
}
