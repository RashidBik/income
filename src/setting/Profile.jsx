import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="p-4 bg-slate-300 text-center">Profile</div>
      <div className='flex flex-col justify-center items-center h-[30vh]'>
        <div className='border text-center rounded-full w-[100px] h-[100px] bg-orange-300'>picture</div>
        <div className='text-xl '>alt</div>
      </div>
      <div className='grid p-4'>
        <div className='bg-gray-300 p-2 m-1'>
            <label className='p-2 ' htmlFor="name">Name</label>
            <input className='' type="text" name="name" value="Rashid Bik" />
        </div>
        <div className='bg-gray-300 p-2 m-1'>
            <label className='p-2 ' htmlFor="email">Email</label>
            <input className='' type="text" name="email" value="rashid@gmail.com" />
        </div>
        <div className='bg-gray-300 p-2 m-1'>
            <label className='p-2 ' htmlFor="password">Password</label>
            <input className='' type="password" name="password" value="*********" />
        </div>
      </div>
    </div>
  )
}

export default Profile
