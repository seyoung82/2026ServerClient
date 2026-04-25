import React from 'react'
import { Outlet } from 'react-router'

function indexPage() {
  return (
    <div className='bg-amber-400 h-9'>
        Todo IndexPage
        <Outlet/>
    </div>
  )
}

export default indexPage
