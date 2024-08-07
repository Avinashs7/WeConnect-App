import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Otp from './components/Otp'
import AboutUs from './components/AboutUs'
import Landing from './components/Landing'
import Workflow from './components/Workflow'
import Vision from './components/Vision'
import Farms from './components/Farms'
import FarmDetail from './components/FarmDetail'
import Footer from './components/Footer'
import Issues from './components/Issues'
import IssueDetail from './components/IssueDetail'


import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Question from './components/Question'
import Dropdown from './components/Dropdown'
import Solution from './components/Solution'



function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    if(localStorage.getItem("accessToken")===null){
      localStorage.clear();
    }
    if(!user && localStorage.getItem("user")){
      setUser(localStorage.getItem("user"));
    }
  },[])
  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
        <Navbar user={user}/>
        <Landing />
        <Workflow />
        <Vision />
        <AboutUs />
        <Footer />
      </>
    },
    {
      path: '/login',
      element: <>
        <Navbar user={user}/>
        <Login setUser={setUser}/></>
    },
    {
      path: '/signup',
      element:<>
        <Navbar user={user}/>
        <SignUp />
      </>
    },
    {
      path: '/otp',
      element: <>
        <Navbar user={user}/>
        <Otp />
      </>
    },  
    {
      path: '/farms',
      element : <>
      <Navbar user={user} />
      <Farms />
      </>
    },
    {
      path: '/farmDetail/:farmId',
      element: <>
      <Navbar user={user}/>
      <FarmDetail />
      </>
    },
    {
      path: '/issues',
      element: <>
      <Navbar user={user}/>
      <Issues />
      </>
    },
    {
      path: '/issueDetail/:issueId',
      element: <>
      <Navbar user={user}/>
      <IssueDetail />
      </>
    },
    {
      path: '/question/:farmId',
      element: <>
      <Navbar user={user}/>
      <Question />
      </>
    },
    {
      path: '/dropdown',
      element:
      <Dropdown />
    },
    {
      path: '/solution/:issueId',
      element: <>
      <Navbar user={user}/>
      <Solution />
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
