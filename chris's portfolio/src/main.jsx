import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Error from './components/Error';
import About from './components/About';
import Project from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
        element: <Project />
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
