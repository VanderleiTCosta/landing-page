import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Coverage from './components/Coverage'
import Payment from './components/Payment'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Testimonials />
        <Coverage />
        <Payment />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App