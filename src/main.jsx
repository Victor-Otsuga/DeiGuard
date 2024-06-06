import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Pitch from './routes/Pitch.jsx';
import Prototipo from './routes/Prototipo.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx';


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Pitch', element: <Pitch />},
      {path: '/Prototipo', element: <Prototipo />},
      {path: '/Contato', element: <Contato />},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
