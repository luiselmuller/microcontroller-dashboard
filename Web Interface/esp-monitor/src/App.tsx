import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/global/Navbar'

// Lazy load components
const Overview = lazy(() => import('./pages/Overview'))
const DetailedView = lazy(() => import('./pages/DetailedView'))
const DeviceStatistics = lazy(() => import('./pages/DeviceStatistics'))
const Sidebar = lazy(() => import('./components/global/Sidebar'))
const MobileNavigation = lazy(() => import('./components/global/MobileNavigation'))

// Firebase
import db from './firebase';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';

let docUptimeOne: any = 0;
let docUptimeTwo: any = 0;
let prevUptime: any = 0;
let newUptime: any = 0;

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1920);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [mobileNavDisabled, setMobileNavDisabled] = useState(true);
  const [clickedMenu, handleClickedMenu] = useState('none');

  const [devices, setDevices]: any = useState({});

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem('theme', theme === "dark" ? "light" : "dark");
  }

  // Getting microncontroller statistics
  useEffect(() => 
    onSnapshot(
    (collection(db,"DeviceStatistics")), 
        (snapshot) => 
        setDevices(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  // Navigation/screen size handlers
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  })
  useEffect(() =>{
    if(screenSize <= 900){
      setSidebarOpen(false);
      setSidebarDisabled(true);
      setMobileNavDisabled(false);
    }
    else{
      setSidebarDisabled(false);
      setMobileNavDisabled(true);
      setMobileNavOpen(false);
    }
    
  }, [screenSize, setSidebarOpen])

  // Getting the microcontroller status by itself
  
  const [microStatus, setMicroStatus] = useState(false);
  useEffect(() => {
    handleDeviceStatus();
    checkDeviceStatus() 

    setTimeout(() => {
      if(newUptime > prevUptime)
        setMicroStatus(true)
      else
        setMicroStatus(false)
    }, 5000)

    
  }, [devices[6]?.info])
  const handleDeviceStatus = async () => {
    setTimeout(async () => {
      docUptimeOne = await getDoc(doc(db, "DeviceStatistics", "Uptime"));

      prevUptime = docUptimeOne.data();
      console.log("prev",prevUptime)
    }, 5000)

  }

  const checkDeviceStatus = async () => {
    docUptimeTwo = await getDoc(doc(db, "DeviceStatistics", "Uptime"));

    newUptime = docUptimeTwo.data();
    console.log("new",newUptime)
  }


  return (
    
    <div className="">
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <div className="flex relative bg-main-bg dark:bg-main-dark-bg dark:text-slate-200 text-main-dark-bg">
            {/* Sidebar  */}
            <div className={`${sidebarOpen ? "w-72  relative" : "w-0 overflow-hidden"} 
            dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-out`}>
              <Sidebar sideIsOpen={sidebarOpen}/>
            </div>
            <div className={`min-h-screen w-full ${false} ? 'md:ml-72' : ' flex-2'`}>
              <div className={`fixed md:static  z-[100000] w-full transition-all duration-50 ease-linear
              ${mobileNavOpen ? "dark:bg-secondary-dark-bg bg-slate-300" : "bg-main-bg dark:bg-main-dark-bg"}`}>
                
                {/* Navbar */}
                <Navbar 
                  customFuncOne={() => setSidebarOpen(!sidebarOpen)}
                  customFuncTwo={() => setMobileNavOpen(!mobileNavOpen)}
                  disabledSide={sidebarDisabled}
                  mobileNav={mobileNavOpen}
                  microStatus={microStatus}
                  clickedMenu={clickedMenu}
                  setClickedMenu={handleClickedMenu}
                  handleTheme={handleThemeSwitch}
                  theme={theme}
                />
              </div>
              {/* Mobile Navigation */}
              <div className={`${mobileNavOpen ? "h-screen z-[10000]" : "h-0 overflow-hidden"}
                dark:bg-secondary-dark-bg bg-slate-300 transition-all duration-150 ease-linear fixed`}>
                <MobileNavigation 
                  handleMobileNavOpen={() => setMobileNavOpen(!mobileNavOpen)}
                  mobileNavOpen
                />
              </div>

              {/* Routes */}
              <div>
                <Routes>
                  <Route path="/" element={<Overview  />} />
                  <Route path="/overview" element={<Overview  />} />
                  <Route path="/detailed-view" element={<DetailedView />} />
                  <Route path="/device-statistics" element={<DeviceStatistics deviceData={devices}/>} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </Suspense>
    </div>
    
  )
}

export default App
