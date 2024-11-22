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
      <div className="flex h-screen">  {/* This container takes full height */}
        {/* Main content */}
        <div className="flex-1 overflow-y-none">
          <Navbar />
          <Home />
        </div>
        
        {/* Sidebar on the right */}
        <SidebarContents className="ml-auto h-screen" /> {/* Ensure the sidebar takes the full height */}
      </div>
    },
    {
      path: '/d',
      element:
      <div>
        <Navbar/>
        <AppDrawer/>
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
