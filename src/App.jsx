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
import ViewResume2 from './ViewResume2'
import ViewResume3 from './ViewResume3'
import { useEffect, useState } from 'react'
import WorkExp from './ResumeEditItems/WorkExp'
import Leadership from './ResumeEditItems/Leadership'
import ResumeTemplate from './ResumeTemplate'


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
        <div>
          <ResumeTemplate/>
          <ViewResume/>
        </div>
      },
      {
        path: '/resume/view2',
        element:
        <div>
          <ResumeTemplate/>
          <ViewResume2/>
        </div>
      },
      {
        path: '/resume/view3',
        element:
        <div>
          <ResumeTemplate/>
          <ViewResume3/>
        </div>
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
      },
      {
        path: '/resume/edit/workexperience',
        element:
        <div>
          <ResumeNav/>
          <WorkExp/>
        </div>
      },
      {
        path: '/resume/edit/leadership',
        element:
        <div>
          <ResumeNav/>
          <Leadership/>
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
