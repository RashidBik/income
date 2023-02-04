import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../helper/AuthContext";

const Profile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const {color} = useContext(authContext);

  const userid = localStorage.getItem('userid')

  useEffect(() => {
    fetch(`http://localhost:4000/api/user/${userid}`)
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
    const data = {name, job, email, password}
    fetch(`${process.env.REACT_APP_API_URL}/api/user/${userid}`,{
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        accessToken: localStorage.getItem('accessToken')
      }
    })
    .then(res => res.json())
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/setting" className='px-2 font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
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
