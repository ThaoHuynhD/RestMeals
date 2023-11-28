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
import { BounceLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { STOP_LOADING } from './constant/constant';

function App() {
  let isLoading = useSelector(state => state.headerReducer.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: STOP_LOADING });
    }, 2000);
  }, [isLoading]);
  let userRoutes = [
    { path: '/', element: <Layout><HomePage /></Layout> },
    { path: '/Home', element: <Layout><HomePage /></Layout> },
    { path: '/About', element: <Layout><AboutPage /></Layout> },
    { path: '/Contact', element: <Layout><ContactPage /></Layout> },
    { path: '/Event', element: <Layout><EventPage /></Layout> },
    { path: '/Gallery', element: <Layout><GalleriesPage /></Layout> },
    { path: '/Menu', element: <Layout><MenuPage /></Layout> },
    { path: '/*', element: <NotFoundPage /> },
  ]
  return (
    <div className="App">
      {isLoading ? (
        <div className="spinner flex-center">
          <BounceLoader color="#dd4d19" size={80} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            {userRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
