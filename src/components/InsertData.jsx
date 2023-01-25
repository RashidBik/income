// import axios from 'axios';
import { useState } from 'react';

function InsertData() {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [deal, setDeal] = useState();
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [date, setDate] = useState(new Date());
  

    const handlSubmit = async (e)=> {
        e.preventDefault();
      const data = {type, amount, deal, group, report, date}
    // const data = {amount, report, date, typOfDeal, group, typeOfAmount};
    // const data = "hey are you working" 
          
    const response = await fetch(`http://localhost:4000/api/user/content/63ccff9ae3d10a5797919529`,{
              method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
           const result = await response.json();
            console.log(result);
    }
  return (
    <div className='bg-gray-400'>
      <button onClick={handlSubmit }>post</button>
      <form onSubmit={handlSubmit}>
        <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount"  onChange={(e)=>setAmount(e.target.value)} value={amount}/>
        </div>
        <div>
          <label htmlFor="typeOfDeal"></label>
          income: <input type="radio" name="typeOfDeal" id="" value="income" onChange={(e)=> setType(e.target.value)  }/>
          expens: <input type="radio" name="typeOfDeal" id="" value="expens" onChange={(e)=> setType(e.target.value)  }/>
        </div>
        <div>
            <label htmlFor="group">group</label>
            <select name="" value={group} onChange={(e)=> setGroup(e.target.value)}>
               <option value="null">___</option>
                <option value="food" >Food</option>
                <option value="shirt">Shirt</option>
            </select>
        </div>
        <div>
            <label htmlFor="setTypeOfAmount"></label>
          cash: <input type="radio" name="setTypeOfAmount" value="cash" onChange={(e)=> setDeal(e.target.value)} />
          credit:  <input type="radio" name="setTypeOfAmount" value="credit" onChange={(e)=> setDeal(e.target.value)} />
        </div>
        <div>
            <label htmlFor="report">report</label>
            <textarea type="text" name="report" onChange={(e)=>setReport(e.target.value)} value={report} />
        </div>
        <div>
            <label htmlFor="select_date">select_date</label>
            <input type="date" name="select_date"  onChange={(e)=>setDate(e.target.value)} value={date}/>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default InsertData
