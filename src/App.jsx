import { RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import UserProfileForm from './UserProfileForm'
import { createBrowserRouter } from 'react-router-dom'
import UsernameForm from './UsernameForm'
import AppDrawer from './AppDrawer'
import SidebarContents from './SidebarContents'
import ResumeNav from './ResumeNav'
import Education from './ResumeEditItems/Education'
import Skills from './ResumeEditItems/Skills'
import Achievements from './ResumeEditItems/Achievements'
import Projects from './ResumeEditItems/Projects'

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
    },
    {
      path: '/resume/view',
      element:
      <h1>View Resume</h1>
    },
    {
      path: '/resume/edit',
      element:
      <h1>Edit Resume</h1>
    },
    {
      path: '/resume/edit/education',
      element:
      <div>
        <ResumeNav/>
        <Education/>
      </div>
    },
    {
      path: '/resume/edit/skills',
      element:
      <div>
        <ResumeNav/>
        <Skills/>
      </div>
    },
    {
      path: '/resume/edit/achievements',
      element:
      <div>
        <ResumeNav/>
        <Achievements/>
      </div>
    },
    {
      path: '/resume/edit/projects',
      element:
      <div>
        <ResumeNav/>
        <Projects/>
      </div>
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
