import { NavLink } from "react-router-dom"

export function AppHeader() {
  return (
    <header className="app-header">
      <section className="container">
        <h1>Ryannapso</h1>
        <nav>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/aboutus' >About</NavLink>
          <NavLink to='/emailindex' >Emails</NavLink>
        </nav>
      </section>
    </header>
  )
}
