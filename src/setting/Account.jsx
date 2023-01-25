import React from 'react'

const Account = () => {
  return (
    <div className='grid'>
      <div className='bg-gray-300 p-4 text-center'>Account</div>
      <div className="grid mt-2 p-4">

          <div className='bg-gray-100 flex justify-around p-3 mt-2'>
              <span>4000</span>
              <span>cash</span>
              <span>food</span>
              <div className='flex flex-col '> 
                <span>update</span>
                <span>delete</span>
              </div>
          </div>
          <div className='bg-gray-100 flex justify-around p-3 mt-2'>
              <span>1000</span>
              <span>credit</span>
              <span>T-Shirt</span>
              <div className='flex flex-col '> 
                <span>update</span>
                <span>delete</span>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Account
