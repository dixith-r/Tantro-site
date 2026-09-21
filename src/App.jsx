import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Industries from './sections/Industries'
import Products from './sections/Products'
import Knowledge from './sections/Knowledge'
import WhyTantro from './sections/WhyTantro'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Products />
        <Knowledge />
        <WhyTantro />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
