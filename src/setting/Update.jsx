import axios from 'axios';
import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router'

const Update = (props) => {
  // const [data, setData] = useState([]);
  const location = useLocation();
  const [id, setId] = useState(0);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [deal, setDeal] = useState('');
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const userid = localStorage.getItem("userid");
  
  // const {state, dispatch} =  useIncomeContext();

    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/${userid}/${location.state}`)
      .then((res)=> res.json())
      .then(data => {
        // setData(data.content)
        setId(data.content._id)
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
      const updatedData = {type, amount, deal, group, report, date };
      // const response = await axios.put(`http://localhost:4000/api/user/content/${userid}/${id}`,{updatedData})
      // const json = await response.data
      // console.log(json);
      fetch(`http://localhost:4000/api/user/content/${userid}/${id}`,{
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json"
        } 
      })
      .then(res => res.json()
      .then(result => {
        console.log(result)
        navigate("/account")
      }))
      .catch(err => console.log(err))
    }
  return (
    <div className='grid'>
    <div className='bg-gray-300 p-4 text-center'>Account</div>
      <form onSubmit={handleSubmit}>
        <div className='grid'>
            <div className='p-2 m-1 bg-slate-300 '>
              <input type="text" className='p-1' name='group' onChange={(e)=> setDate(e.target.value)} value={date}/>
              {/* <input type="date" name="" id="" hidden /> */}
              <label className='px-2' htmlFor="group">date</label>
             </div>
            <div className='p-2 m-1 bg-slate-300 '>
              <span className='px-2'>
              income <input className='p-1' type="radio" name='type' onChange={(e)=> setType(e.target.value)} value="income" checked={type == "income" && true} />
              </span>
              <span>
              expens <input className='p-1' type="radio" name='type' onChange={(e)=> setType(e.target.value)} value="expens" checked={type == "expens" && true} />
              </span>
            </div>
             <div className='p-2 m-1 bg-slate-300 '>
               <input type="text" className='p-1' name='amount'  onChange={(e)=> setAmount(e.target.value)} value={amount}/>
               <label className='px-2' htmlFor="amount">Amount</label>
             </div>            
             <div className='p-2 m-1 bg-slate-300 '>
              <span className='px-2'>
              credit <input type="radio" className=' ' name='deal' onChange={(e)=> setDeal(e.target.value)} value="credit" checked={ deal == "credit" && true} />
              </span>
                <span>
                cash <input type="radio" className='' name='deal' onChange={(e)=> setDeal(e.target.value)} value="cash" checked={ deal == "cash" && true}/>
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
               <input type="submit" value="save" className='border px-2 rounded' />
             </div>
         </div>
      </form>
  </div>
  )
}

export default Update