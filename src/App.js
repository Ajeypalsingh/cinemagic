import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import NewMovie from './components/NewMovie';
import './styles/index.css';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <NewMovie />
      <NotFound />
      <Detail />
      <Footer />

      
    </>
  )
}

export default App;
