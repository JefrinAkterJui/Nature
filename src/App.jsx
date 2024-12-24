import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const MyRoute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
