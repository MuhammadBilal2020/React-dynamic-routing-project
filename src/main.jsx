
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './pages/home.jsx'
import SingleProduct from './pages/singleProduct.jsx'
import Contact from './pages/contact.jsx'

let router = createBrowserRouter([
    {
        path : "/" ,
        element : <App />,
        children : [
           
            { path : "" , element : <Home /> } ,
            { path : "contact" , element : <Contact /> } ,


            {path : "singleProduct/:id" , element : <SingleProduct />}
        ]
    }
])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)

