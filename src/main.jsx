import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter} from 'react-router-dom'


// const router = createHashRouter(
//   [
//     {
//       path: '/',
//       element: <App/>,
//       children: routes
//     }
//   ]
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}>

    </RouterProvider> */}
    <BrowserRouter basename='/testing/'>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
