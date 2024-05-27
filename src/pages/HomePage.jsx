import imgUrl from '../assets/imgs/emaillogo.png'

export function HomePage() {
    return (
        <section className="home">
            <h1>Welcome to Mister Email</h1>
            <img src={imgUrl} alt="" />
        </section>
    )
}
