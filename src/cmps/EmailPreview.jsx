export function EmailPreview({ email }) {
  return (
    <div className={`email-item`}>
      <span className="email-from">{email.from}</span>
      <span className="email-subject">{email.subject}</span>
      <span className="email-body">{email.body}</span>
      <span className="email-date">{new Date(email.sentAt).toLocaleDateString()}</span>
    </div>

  )
}
