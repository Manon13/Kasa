import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import './index.sass'

/**
 * Composant App.
 * Composant racine de l'application qui inclut le header,
 * le contenu principal basé sur le routage
 * et le footer.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant l'application principale.
 */
function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;