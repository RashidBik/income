import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NewInser from '../components/NewInser';
import Time from '../components/Time';
import authContext from '../helper/AuthContext';

function Report() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();
  const {lang, color} = useContext(authContext)
  const userid = localStorage.getItem('userid');

    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/${userid}`)
      .then((res)=> res.json())
      .then(data => {
        setData(data)
        setContents(data.content)
      })
      .catch(err => setError(err));
    }, []);

    const searchData = (keyword)=>{
      if (keyword.length !== "") {
        const searchedData = data.content.filter(item => {
          return Object.values(item.group)
          .join("")
          .toLowerCase()
          .includes(keyword.toLowerCase());
        })
        setContents(searchedData)
      } else {
        // refreshHandler()
        setContents(data.content)
      }
    }
    const sortDate = (choosedDate)=>{

        const selectedData = contents.filter(item => {
          return new Date().getMonth(item.date) === choosedDate;
        })
     
        // setContents(selectedData)
    }
  return (
    <div>
      <Header searchData={searchData} />
      <span>
      <NewInser/>         
    </span> 
        <nav style={color.C3} className='py-2'>
        <Time sortDate={sortDate} />
        </nav>
        <div className='px-3  flex flex-col '>
          <div className='py-1'>
            <nav style={color.C3} className='flex text-xl rounded-t-full justify-evenly font-bold'>
                <div className='text-green-800'>
                  <p>{lang.reports.calc[0]}</p>
                  <p>{data.assets && data.assets.income}</p>
                </div>
                <div className='text-red-800'>
                  <p>{lang.reports.calc[1]}</p>
                  <p>{data.assets && data.assets.expens}</p>
                </div>
                <div className='text-blue-800'>
                  <p>{lang.reports.calc[2]}</p>
                  <p>{data.assets && data.assets.income - data.assets.expens}</p>
                </div>
            </nav>
          </div>
              {contents && contents.map(item => (
                  <div key={item._id} className='flex flex-col'>
                      <div onClick={()=> navigate('/card',{state: item._id})} 
                        className='grid grid-cols-3 rounded-xl justify-around m-2 px-2 py-3 text-xl ' 
                        style={item.type === "income" ? color.C3 : color.C2}>
                          <span style={{color: item.type === "income" ? "green":"red"}} className='p-1'>{item.amount}</span>
                          <span style={{color: item.type === "income" ? "green":"red"}} className='p-1'>{item.deal}</span>
                          <span style={{color: item.type === "income" ? "green":"red"}} className='p-1'>{item.group}</span>
                      </div>
                  </div>
              ))}
        </div>
    </div>
  )
}

export default Report