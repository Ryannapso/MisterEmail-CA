import { useEffect, useState } from "react"

export function EmailFilter({ filterBy, onSetFilterBy }) {

  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  
  useEffect(() => {
    onSetFilterBy(filterByToEdit)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }

  const { isRead } = filterByToEdit

  return (  
    <div className="email-filter">
<select  name="isRead" id="isRead" value={isRead} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Read">Read</option>
        <option value="Unread">Unread</option>
      </select>
    </div>
      
  )
}
