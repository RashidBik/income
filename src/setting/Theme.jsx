import React from 'react'

const Theme = () => {
  return (
    <div>
      <div className="p-4 text-center bg-slate-400">Select Theme</div>
      <div>
        <label className='' htmlFor="color"></label>
        <input className='w-full h-20' type="color" name='color' />
      </div>
    </div>
  )
}

export default Theme
