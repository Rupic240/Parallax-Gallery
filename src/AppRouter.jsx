import App from './App.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import Projects from './pages/Projects.jsx';
import Privacy from './pages/Privacy.jsx';
import BlownUp from './pages/BlownUp.jsx';
import Mashup from './pages/Mashup.jsx';
import Tectonic from './pages/Tectonic.jsx';
import Figura from './pages/Figura.jsx';
import Facade from './pages/Facade.jsx';
import Tubes from './pages/Tubes.jsx';
import Moon from './pages/Moon.jsx';
import Arches from './pages/Arches.jsx';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from 'react';

const AppRouter = () => {

  const [showSwiper, setShowSwiper] = useState(false);
  const [selectedImageID, setSelectedImageID] = useState(null);

  const handleClick = (id) => {
    setSelectedImageID(id);
    setShowSwiper(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/info',
          element: <Info />
        },
        {
          path: '/privacy',
          element: <Privacy />
        },
        {
          path: '/blown_up',
          element: <BlownUp
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/mashup',
          element: <Mashup
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/tectonic',
          element: <Tectonic
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/figura',
          element: <Figura
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/facade',
          element: <Facade 
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/tubes',
          element: <Tubes 
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/moon',
          element: <Moon 
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
        {
          path: '/arches',
          element: <Arches 
            showSwiper={showSwiper}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
            handleClick={handleClick}
          />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;