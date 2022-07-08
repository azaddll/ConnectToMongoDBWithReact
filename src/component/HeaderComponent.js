import React from 'react'
import {Link} from 'react-router-dom';


function HeaderComponent() {
  return (
    <navbar className={'flex justify-center gap-20 bg-slate-900 py-5'}>
        <Link className='bg-slate-800 px-2 rounded-md text-white hover:bg-slate-700 active:bg-slate-500' to={'/'}>Main</Link>
        <Link className='bg-slate-800 px-2 rounded-md text-white hover:bg-slate-700 active:bg-slate-500' to={'/Home'}>Home</Link>
        <Link className='bg-slate-800 px-2 rounded-md text-white hover:bg-slate-700 active:bg-slate-500' to={'/About'}>About</Link>
        <Link className='bg-slate-800 px-2 rounded-md text-white hover:bg-slate-700 active:bg-slate-500' to={'/ContactUS'}>ContactUS</Link>

    </navbar>
  )
}

export default HeaderComponent