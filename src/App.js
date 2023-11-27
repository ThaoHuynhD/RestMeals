import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './template/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import EventPage from './pages/EventPage/EventPage';
import GalleriesPage from './pages/GalleriesPage/GalleriesPage';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {
  let userRoutes = [
    { path: '/', element: <Layout><HomePage /></Layout> },
    { path: '/Home', element: <Layout><HomePage /></Layout> },
    { path: '/About', element: <Layout><AboutPage /></Layout> },
    { path: '/Contact', element: <Layout><ContactPage /></Layout> },
    { path: '/Event', element: <Layout><EventPage /></Layout> },
    { path: '/Gallery', element: <Layout><GalleriesPage /></Layout> },
    { path: '/Menu', element: <Layout><MenuPage /></Layout> },
    { path: '/*', element: <Layout><NotFoundPage /></Layout> },
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {userRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
