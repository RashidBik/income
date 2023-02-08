import axios from 'axios';
import {useState, useEffect, useContext} from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import Back from '../components/Back';
import authContext from '../helper/AuthContext';

const Update = (props) => {
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [deal, setDeal] = useState('');
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const {color} = useContext(authContext);
  const navigate = useNavigate();
  
  const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
      axios({
        url: `${process.env.REACT_APP_API_URL}/api/user/content/${location.state}`,
        headers: {"accesstoken": accessToken}
      })
      .then((res)=> res.data)
      .then(data => {
        setAmount(data.content.amount)
        setType(data.content.type)
        setDeal(data.content.deal)
        setGroup(data.content.group)
        setReport(data.content.report)
        setDate(data.content.date)
      })
      .catch(err => setError(err));
    }, []);

    const handleSubmit = async(e) => {
      e.preventDefault()
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/api/content/${location.state}`,
        data: {type, amount, deal, group, report, date },
        headers: { "accesstoken": accessToken } 
      })
      .then(res => res.data)
      .then(result => {
        console.log(result);
        navigate("/account")
      })
      .catch(err => {
        setError(err)
        console.log(err);
      } 
      )}
  return ( 
    <div className='grid'>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Back />
      </header>
      <form onSubmit={handleSubmit}>
        <div style={color.C4} className='grid'>
            <div className='p-2 m-1 bg-slate-300 '>
              <input type="text" className='p-1' name='group' onChange={(e)=> setDate(e.target.value)} value={date}/>
              <label className='px-2' htmlFor="group">date</label>
             </div>
            <div className='p-2 m-1 bg-slate-300 '>
              <span className='px-2'>
              income <input className='p-1' type="radio" name='type' onChange={(e)=> setType(e.target.value)} value="income" checked={type === "income" && true} />
              </span>
              <span>
              expens <input className='p-1' type="radio" name='type' onChange={(e)=> setType(e.target.value)} value="expens" checked={type === "expens" && true} />
              </span>
            </div>
             <div className='p-2 m-1 bg-slate-300 '>
               <input type="text" className='p-1' name='amount'  onChange={(e)=> setAmount(e.target.value)} value={amount}/>
               <label className='px-2' htmlFor="amount">Amount</label>
             </div>            
             <div className='p-2 m-1 bg-slate-300 '>
              <span className='px-2'>
              credit <input type="radio" className=' ' name='deal' onChange={(e)=> setDeal(e.target.value)} value="credit" checked={ deal === "credit" && true} />
              </span>
                <span>
                cash <input type="radio" className='' name='deal' onChange={(e)=> setDeal(e.target.value)} value="cash" checked={ deal === "cash" && true}/>
                </span>
             </div>
             <div className='p-2 m-1 bg-slate-300 '>
              <input type="text" className='p-1' name='group' onChange={(e)=> setGroup(e.target.value)} value={group}/>
              <label className='px-2' htmlFor="group">Group</label>
             </div>
             <div className='p-2 m-1 bg-slate-300 '>
              <textarea className='p-1' name='report' onChange={(e)=> setReport(e.target.value)} value={report}></textarea>
              <label className='px-2' htmlFor="report">Report</label>
             </div>
             <div className='flex p-2 justify-end px-8 '> 
               <input style={color.C1} type="submit" value="save" className='border px-2 rounded-xl w-full py-2' />
             </div>
         </div>
      </form>
  </div>
  )
}

export default Update
