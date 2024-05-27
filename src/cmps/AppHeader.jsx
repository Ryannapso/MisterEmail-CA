import { NavLink } from "react-router-dom"
import imgUrl from "../assets/imgs/gmaillogo.png"

export function AppHeader() {
  return (
    <header className="app-header">
      <section className="container">
      <img src={imgUrl} alt="" />
        <nav>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/aboutus' >About</NavLink>
          <NavLink to='/emails' >Emails</NavLink>
        </nav>
      </section>
    </header>
  )
}
