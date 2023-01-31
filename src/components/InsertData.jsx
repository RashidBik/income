import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';

function InsertData() {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState();
  const [dealCheck, setDealCheck] = useState(false);
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectOpt, setSelectOpt] = useState('Select');
  const [toggleOpt, setToggleOpt] = useState(false);
  // const [display, setDisplay] = useState('flex');
  const [visible, setVisible] = useState(false);

  const userid = localStorage.getItem('userid')
  const deal = dealCheck ?'cash':'credit';
  const data = {type, amount, deal, group, report, date}
  const navigate = useNavigate();
  const {color} = useContext(authContext);

    const handlSubmit = async (e)=> {
      e.preventDefault();
      const response = await fetch(`http://localhost:4000/api/user/content/${userid}`,{
          method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        console.log(result);
        navigate('/report');
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
      <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/home" className='px-2 font-bold'>back</Link>
    </header>
    <div style={color.C3} className='flex flex-col p-3 h-full'>
      <form style={color.C1} className='flex flex-col rounded-xl p-4 ' onSubmit={handlSubmit}>
        <div className='text-center text-xl p-3'>Insert Your Data</div>
        <div className=''>
        <div className="px-6 py-4 text-xl ">
          <div className=' flex flex-col justify-evenly items-center p-4 rounded-xl border border-gray-400 '>
          <label className='p-2 ' htmlFor="amount">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
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
            <input className=' font-bold px-3 p-2 rounded-xl border border-gray-400' 
            type="button" 
            value="income" 
            onClick={(e)=> setType(e.target.value)  }/>
            <input className=' font-bold px-3 p-2 rounded-xl border border-gray-400' 
            type="button" 
            value="expens" 
            onClick={(e)=> setType(e.target.value)  }/>
        </div>
        <div className="p-8">
           <div className='flex flex-col border border-gray-400 rounded-xl space-y-12'>
            <div className='flex select-none justify-between rounded-xl p-2 px-4  bg-inherit ' 
            onClick={(e)=> setToggleOpt(!toggleOpt)}>
              <p>{selectOpt}</p>
              {toggleOpt ?<p>-</p>:<p>+</p>}
            </div>
            <div 
            className=' absolute grid-cols-3 p-2 px-4 z-10 rounded-xl bg-[#222]' style={{display: toggleOpt ? 'grid': 'none'}}>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg  bg-[#000]' onClick={handlClick}>1</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg  bg-[#000]' onClick={handlClick}>2</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg  bg-[#000]' onClick={handlClick}>3</div>
              <div className='m-1 w-16 h-8 text-center border border-gray-400 rounded-lg  bg-[#000]' onClick={handlClick}>4</div>
              <div  className='m-1 w-16 h-8 text-center '>
                <span onClick={handlNewGroup} style={{display: visible ? 'none': 'flex'  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                </span>
                <div style={{display: !visible ? 'none': 'flex'  }} className=' bg-inherit'>
                  <input 
                  className=' absolute w-32 px-2 h-8 bg-none outline-none '
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
          <label class="switch">
            <input type="checkbox" checked={dealCheck} onChange={()=> setDealCheck(!dealCheck)} /> 
            <span className="slider round"></span>
          </label>
          <p className='px-4 font-bold'>Cash</p>
        </div>
        <div className="px-8 flex justify-center text-lg">
            <textarea className=' rounded-l-xl p-2 w-full bg-inherit' 
            placeholder='Insert your report here' 
            type="text" name="report" 
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </span>
          </div>
        </div>
        </div>
        <div className='py-8 px-2'>
          <div className='border border-gray-400 p-3 text-center text-xl font-bold rounded-xl'>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default InsertData
