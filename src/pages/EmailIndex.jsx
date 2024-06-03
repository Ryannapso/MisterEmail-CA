import { SideBar } from "../cmps/SideBar"
import { useState, useEffect } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { EmailFilter } from "../cmps/EmailFilter"

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
    <div> 
      <EmailFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy}/>
    <div className="email-index">
      <SideBar />
      <EmailList emails={emails} />
    </div>
    </div>
  )
}
