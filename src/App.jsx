import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { EmailIndex } from './pages/EmailIndex';
export function App() {

    return (
        <section className='main-app'>
            <header className="app-header">
                <section className="container">
                    <h1>Ryannapso</h1>
                </section>
            </header>
            <Router>
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutus" element={<AboutUs />} ></Route>
                        <Route path="/emailindex" element={<EmailIndex />} ></Route>
                    </Routes>
                </main>
            </Router>
            <footer>
                <section className="container">
                    Ryan Napso 2024 &copy;
                </section>
            </footer>
        </section>


    )
}

