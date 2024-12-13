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
import ViewResume from './ViewResume'
import { useEffect, useState } from 'react'

function App() {
  const [quickLinks,setQuickLinks]=useState(window.innerWidth>400);
  useEffect(() => {
    const handleResize = () => {
      setQuickLinks(window.innerWidth > 400);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const router= createBrowserRouter(
    [
      {
        path: '/',
        element:
        <div className={(quickLinks)?"flex h-screen":"flex h-[1600px]"}>
          <div className="flex-1 overflow-y-none relative">
            <Navbar />
            <Home />          
          </div>
          <div className={(quickLinks) ? "ml-auto h-screen" : "sticky top-0 max-h-[600px] overflow-auto"}>
            <SidebarContents/>
          </div>
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
        <ViewResume/>
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

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
