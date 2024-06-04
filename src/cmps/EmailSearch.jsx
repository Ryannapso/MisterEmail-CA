import { useEffect, useRef, useState } from "react"
import imgUrl from "../assets/imgs/gmaillogo.png"

export default function EmailSearch({ filterBy, onSetFilterBy }) {

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

  const { body } = filterByToEdit
  return (
    <form ref={formRef} onSubmit={onSubmitFilter} className="email-search">
        <img src={imgUrl} alt="" />
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
    </form>
  )
}
