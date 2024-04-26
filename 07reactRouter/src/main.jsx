import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Me from './components/me/Me.jsx'
import Company from './components/company/Company.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
//"Github" default export tha to usko aysa hi import kr liya , "githubInfoLoader" ye function sirf export ho raha tha to usko aysa likala.
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' >
        <Route path='' element={<Contact />} />
        <Route path='me' element={<Me />} />
        <Route path='company' element={<Company />} />
      </Route>
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}   //api call when hover ,"loader" will contain returned value of fn
      path='github' 
      element={<Github />}
       />
       {/* jab  */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
