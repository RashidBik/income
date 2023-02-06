import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import authContext from '../helper/AuthContext';
import Back from './Back';

function InsertData() {
  const [error, setError] = useState(null);
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [dealCheck, setDealCheck] = useState(false);
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectOpt, setSelectOpt] = useState('Select');
  const [toggleOpt, setToggleOpt] = useState(false);
  const [visible, setVisible] = useState(false);

  const deal = dealCheck ?'cash':'credit';
  const navigate = useNavigate();
  const {color} = useContext(authContext);

const accessToken = localStorage.getItem('accessToken');
    const handlSubmit = async (e)=> {
      e.preventDefault(); 
     
      axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/api/user/content`,
            data: {type, amount, deal, group: selectOpt, report, date},
            headers: {'accesstoken': accessToken }
        })
        .then(res => res.data)
        .then(result => {
          navigate('/report');
        })
        .catch(err => {
          setError(err)
        })
    }
    
    const handlClick = (e) => {
      setSelectOpt(e.target.textContent)
      setToggleOpt(!toggleOpt)
    }

    const handlNewGroup = (e) => {
      setVisible(!visible)
    }

  return (
    <>
      <header style={color.C1} className='flex justify-end p-4 '> 
      <Back />
    </header>
    <div style={color.C1} className='flex flex-col p-3 h-full md:w-full'>
      <form style={color.C1} className='flex flex-col rounded-xl p-4 ' onSubmit={handlSubmit}>
        <div className='text-center text-xl p-3'>Insert Your Data</div>
        <div className=''>
        <div className="px-6 py-4 text-xl ">
          <div className=' flex flex-col justify-evenly items-center p-4 rounded-xl border border-gray-100 '>
          <label className='p-2 ' htmlFor="amount">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
          </label>
            <input 
            className='w-60 text-xl text-center outline-none bg-inherit'
            type="text" 
            name="amount"  
            onChange={(e)=>setAmount(e.target.value)} 
            value={amount}
            placeholder="Insert Amount"
            />
          </div>
        </div>
        <div className="flex justify-evenly">
            <input className=' font-bold px-3 p-2 rounded-xl border border-gray-100' 
            type="button" 
            value="income" 
            onClick={(e)=> setType(e.target.value)  }/>
            <input className=' font-bold px-3 p-2 rounded-xl border border-gray-100' 
            type="button" 
            value="expens" 
            onClick={(e)=> setType(e.target.value)  }/>
        </div>
        <div className="p-8">
           <div className='flex flex-col border border-gray-100 rounded-xl space-y-12'>
            <div className='flex select-none justify-between rounded-xl p-2 px-4  bg-inherit ' 
            onClick={(e)=> setToggleOpt(!toggleOpt)}>
              <p>{selectOpt}</p>
              {toggleOpt ?<p>-</p>:<p>+</p>}
            </div>
            <div 
            className=' absolute grid-cols-3 p-2 px-4 z-10 rounded-xl bg-[#222]' style={{display: toggleOpt ? 'grid': 'none', background: color.C1.background}}>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg ' onClick={handlClick}>food</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg ' onClick={handlClick}>shirt</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg ' onClick={handlClick}>salary</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg ' onClick={handlClick}>home</div>
              <div  className='m-1 w-16 h-8 text-center '>
                <span onClick={handlNewGroup} style={{display: visible ? 'none': 'flex'  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </span>
                <div style={{display: !visible ? 'none': 'flex'  }} className=' bg-inherit'>
                  <input 
                  className=' absolute w-32 px-2 h-8 bg-none outline-none text-gray-900 '
                  type="text" value={group}
                  placeholder="new group"
                  onChange={(e)=> setGroup(e.target.value)} />  
                </div>  
              </div>
            </div> 
           </div>
        </div>
        <div className=" flex justify-center text-xl p-2">
          <p className='px-4 font-bold'>Credit</p>
          <label className="switch">
            <input type="checkbox" checked={dealCheck} onChange={()=> setDealCheck(!dealCheck)} /> 
            <span className="slider round"></span>
          </label>
          <p className='px-4 font-bold'>Cash</p>
        </div>
        <div className="px-8 flex justify-center text-lg">
            <textarea className=' rounded-xl p-2 w-full bg-inherit border border-gray-100' 
            placeholder='Insert your report here' 
            name="report" 
            onChange={(e)=>setReport(e.target.value)} 
            value={report} />
        </div>
        <div className="p-2 text-xl flex justify-center">
          <div className='flex relative rounded-lg'>
            <input 
              className='w-40 text-sm p-1 rounded-lg bg-inherit' 
              type="date" 
              onChange={(e)=>setDate(e.target.value)} 
              value={date}
              />
            <span className=' absolute right-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </span>
          </div>
        </div>
        </div>
        <div className='py-8 px-2'>
          <div className='border border-gray-100 p-3 text-center text-xl font-bold rounded-xl'>
            <input type="submit" value="Save" />
          </div>
        </div>
        {error}
      </form>
    </div>
    </>
  )
}

export default InsertData
