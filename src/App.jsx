import { RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import UserProfileForm from './UserProfileForm'
import { createBrowserRouter } from 'react-router-dom'
import UsernameForm from './UsernameForm'
import AppDrawer from './AppDrawer'
import SidebarContents from './SidebarContents'

const router= createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div className="flex h-screen">
        <div className="flex-1 overflow-y-none">
          <Navbar />
          <Home />          
        </div>
        <SidebarContents className="ml-auto h-screen" />
      </div>
    },
    {
      path: '/editprofile',
      element:
      <UserProfileForm/>
    },
    {
      path: '/updateusernames',
      element:
      <UsernameForm/>
    }
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
