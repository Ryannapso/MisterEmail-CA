import { useEffect, useRef, useState } from "react"

export function EmailFilter({ filterBy, onSetFilterBy }) {

  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  const formRef = useRef()

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilterBy(filterByToEdit)
  }

  const { body, isRead } = filterByToEdit

  return (
    <form ref={formRef} onSubmit={onSubmitFilter} className="email-filter">
      <div className="search">
        <button className="search-button">
          <i className="material-icons">search</i>
        </button>
        <input
          onChange={handleChange}
          name="body"
          id="doby"
          type="text"
          value={body}
          placeholder="Search mail"
          className="search-input"
        />
      </div>
      <select name="isRead" id="isRead" value={isRead} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Read">Read</option>
        <option value="Unread">Unread</option>
      </select>
    </form>
  )
}
