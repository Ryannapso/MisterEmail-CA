import { SideBar } from "../cmps/SideBar"
import { useState, useEffect } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { EmailFilter } from "../cmps/EmailFilter"
import EmailSearch from "../cmps/EmailSearch"

export function EmailIndex() {

  const [emails, setEmails] = useState(null)
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())

  console.log(filterBy)

  useEffect(() => {
    loadEmails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  async function loadEmails() {
    try {
      const emails = await emailService.query(filterBy)
      setEmails(emails)
    } catch (error) {
      console.log('Having issues with loading emails:', error)
    }
  }

  function onSetFilterBy(filterBy) {
    setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
  }

  if (!emails) return <div>Loading....</div>

  return (
      <div className="email-index">
        <EmailSearch onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
        <EmailFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
        <SideBar />
        <EmailList emails={emails} />
      </div> 
  )
}
