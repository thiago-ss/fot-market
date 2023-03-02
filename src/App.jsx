import Carousel from './components/Carousel/Carousel'
import Header from './components/Header'
import Analysis from './sections/Analysis'
import Hero from './sections/Hero'
import Negotiation from './sections/Negotiation'
import Platforms from './sections/Platforms'
import Webinarios from './sections/Webinarios'
import News from './sections/News'
import About from './sections/About'
import Faq from './sections/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Platforms />
      <Webinarios />
      <Analysis />
      <Carousel />
      <Negotiation />
      <News />
      <About />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
