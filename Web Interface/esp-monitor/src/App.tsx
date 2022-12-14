import { lazy, Suspense, useEffect, useState } from 'react'
import React from 'react'

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

// Dropdowns
import Notifications from './components/global/Notifications';
import Settings from './components/global/Settings';
import Account from './components/global/Account';

// Firebase
import db from './firebase';
import { collection, onSnapshot, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';


let currentDate = new Date()
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
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

  // Device status
  const [microStatus, setMicroStatus] = useState(false);

  useEffect(() => {
    setMicroStatus(devices[5]?.info)
  },[devices[5]?.info])

  // This mess should get refactored (need to do this because i have no time to do it the proper way)
  useEffect(() => {
    let prevUptime: number;
    let newTime: number;
    const getPrevUptime = async () => {
      prevUptime = await uptime();
    }
    getPrevUptime();
    
    setTimeout(async () => {
      newTime = await uptime();
      
      if(prevUptime - newTime === 0){
        setMicroStatus(false)
        await updateDoc(doc(db, "DeviceStatistics", "LastOnline"), {info: cDay + "/" + cMonth + "/" + cYear + " - " + time});
        await updateDoc(doc(db, "DeviceStatistics", "Status"), {info: false});
      }
      else{
        await updateDoc(doc(db, "DeviceStatistics", "LastOnline"), {info: "Currently Online"});
      }
      console.log(prevUptime, newTime)
      console.log(prevUptime - newTime === 0)
    }, 10000)
  }, [devices[6]?.info])

  async function getUptime() {
    try {
      let uptimeDoc = await getDoc(doc(db, "DeviceStatistics", "Uptime"));
      return await uptimeDoc.data()?.info;
    } catch(err) {
      console.log(err);
    }
  }

  async function uptime(){
    let uptime: number = await getUptime();
    return uptime;
  }

  // Notifications
  const [notifications, setNotifications] = useState([{}]);

  // Getting notifications
  useEffect(() => 
    onSnapshot(
    (collection(db,"Notifications")), 
        (snapshot) => 
        setNotifications(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

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
              <div className={`fixed md:static  z-[1000000] w-full transition-all duration-50 ease-linear
              ${mobileNavOpen ? "dark:bg-secondary-dark-bg bg-slate-300" : "bg-main-bg dark:bg-main-dark-bg"}`}>
                
                {/* Navbar */}
                <Navbar 
                  customFuncOne={() => setSidebarOpen(!sidebarOpen)}
                  customFuncTwo={() => setMobileNavOpen(!mobileNavOpen)}
                  disabledSide={sidebarDisabled}
                  mobileNav={mobileNavOpen}
                  notifications={notifications}
                  setClickedMenu={handleClickedMenu}
                  handleTheme={handleThemeSwitch}
                  theme={theme}
                  microStatus={microStatus}
                />

                {/* Dropdowns */}
                <div className="w-full relative flex justify-end">
                  {/* Logic for the dropdown menus */}
                  {!mobileNavOpen && 
                    clickedMenu === "notifications" ? <Notifications menuFunc={handleClickedMenu} notifs={notifications}/> :
                    clickedMenu === "settings" ? <Settings menuFunc={handleClickedMenu}/> :
                    clickedMenu === "account" ? <Account menuFunc={handleClickedMenu}/> :" "
                  }
                </div>
              </div>
              {/* Mobile Navigation */}
              <div className={`${mobileNavOpen ? "h-screen z-[100000]" : "h-0 overflow-hidden"}
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
