import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Error from './components/Error/Error';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router= {router} />
);
