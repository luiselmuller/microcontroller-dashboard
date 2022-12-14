import { CircularProgress, ClickAwayListener } from '@mui/material'
import { FC, lazy, Suspense } from 'react'

import CheckBoxOutlineIcon from '@mui/icons-material/CheckBoxOutlined'
const NotificationCard = lazy(() => import('./NotificationCard'))

import db from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { useAutoAnimate } from '@formkit/auto-animate/react'
import React from 'react';

type notifProps = {
  menuFunc?: any,
  notifs?: any
}

let currentDate = new Date()
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
const Notifications:FC<notifProps> = ({menuFunc, notifs}) => {

  const [notificationRef] = useAutoAnimate<HTMLDivElement>();
  

  return (
    <ClickAwayListener onClickAway={() => {menuFunc('none')}}>
      <div className={`z-[1000] fixed mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit max-h-96 w-[300px] sm:-translate-x-[125px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`}>
        <div className="p-2 flex gap-10 items-center">
          <h2 className="w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500">Alerts</h2>
          <div className="w-full flex items-center">
            <button type="button" className="outline-none text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out"
            onClick={() => 
              notifs.map(
                async (alert: any) => 
                  await deleteDoc(doc(db,"Notifications", alert.id))
              )}>
              <CheckBoxOutlineIcon fontSize="small" className="scale-90"/>
              Mark all as read
            </button>
          </div>
        </div>
        <div ref={notificationRef} className="flex flex-col justify-evenly gap-1 py-1 px-1">
          {Array.isArray(notifs) ? notifs.map(
            (alert:any) => (
              <div key={alert.id}>
                <Suspense  fallback={<CircularProgress />}>
                  <NotificationCard 
                    message={alert.notification} 
                    time={cDay + "/" + cMonth + "/" + cYear + " - " + time}
                    id={alert.id}
                  />
                </Suspense>
              </div>
            )
          )
          : " "
        }
        {notifs.length === 0 && <p className="my-5 text-center font-bold text-xl opacity-80 dark:text-slate-400 text-slate-500">No alerts</p>}
          
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Notifications