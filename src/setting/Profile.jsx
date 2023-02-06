import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import authContext from "../helper/AuthContext";

const Profile = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const {color} = useContext(authContext);

  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/api/user`,
      headers: {"accesstoken": accessToken}
    })
    .then(res => res.json())
    .then(result => {
      setName(result.user.name)
      setJob(result.user.job)
      setEmail(result.user.email)
      setPassword(result.user.password)
    })
    .catch(err => setErr(err))

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios({
      method: "put",
      url:`${process.env.REACT_APP_API_URL}/api/user`,
      data: {name, job, email, password},
      headers: {
        "accesstoken": accessToken
      }
    })
    .then(res => res.json())
    .then(msg => {

    })
    .catch(err => {
      setErr(err)
    })
  }

  return (
    <div>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Back/>
      </header>
      <div className='flex flex-col justify-center items-center h-[30vh]'>
        <div className='border text-center rounded-full w-[100px] h-[100px] bg-orange-300'>picture</div>
        <div className='text-xl '>alt</div>
      </div>
      <div className='grid p-4'>
        <form onSubmit={handleSubmit}>
          <div className='bg-gray-300 p-2 m-1'>
              <label className='p-2 ' htmlFor="name">Name</label>
              <input className='' type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className='bg-gray-300 p-2 m-1'>
              <label className='p-2 ' htmlFor="job">Job</label>
              <input className='' type="text" name="job" value={job} onChange={(e)=> setJob(e.target.value)}/>
          </div>
          <div className='bg-gray-300 p-2 m-1'>
              <label className='p-2 ' htmlFor="email">Email</label>
              <input className='' type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className='bg-gray-300 p-2 m-1'>
              <label className='p-2 ' htmlFor="password">Password</label>
              <input className='' type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <input style={color.C1} className="w-full p-2 mt-3" type="submit" value="save" />
        </form>
      </div>
    </div>
  )
}

export default Profile
