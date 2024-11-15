import './globals.scss' // Styl globalny
import Header from '../components/header' // Importowanie komponentu Header
import Comp1_2 from '../components/comp_1-2' // Importowanie komponentu Recykling
import Comp3 from '../components/comp-3' // Importowanie komponentu Oszczędzanie Energii
import Footer from '../components/footer' // Importowanie komponentu Footer
import Quiz from '../components/quiz'

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Comp1_2 />
      <Comp3 />
      <Quiz />
      <Footer />
    </main>
  )
}
