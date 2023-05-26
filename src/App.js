import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import NewMovie from './components/NewMovie';
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';

function App() {
  return (
    <>
      {/* <Header />
      <Catalog />
      <NewMovie />
      <NotFound />
      <Detail />
      <Footer /> */}

      <Header />
      <Routes>
        <Route exact path='/cinemagic' element={<Catalog />} />
        <Route exact path='/new' element={<NewMovie />} />
        <Route exact path='/movie/:detail' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App;
