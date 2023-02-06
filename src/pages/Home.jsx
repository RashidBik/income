import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import Header from "../components/Header";
import { useContext } from "react";
import authContext from "../helper/AuthContext";
import NewInser from "../components/NewInser";
import axios from "axios";


export default function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const accesstoken = localStorage.getItem('accesstoken');
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState();
  const [loading, setLoading] = useState(true); 
  const {lang, color} = useContext(authContext);
  
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/user/content`,
      headers: {"accesstoken": accesstoken}
    })
    .then((res)=> res.data)
    .then(({content, assets}) => {
      setChartData({
        labels: ['income', 'expens'], 
        datasets: [{data: [assets.income, assets.expens],
          backgroundColor: [
            "#78b778",
            "#f98080"
          ],
          borderColor: '#eee',
          borderWidth: 2,
        }]
      })
      setLoading(false)
    })
    .catch(err => setError(err));
  }, []);

  return (
    <>
      <div className=' md:hidden'>
        <Header />
      </div>
    <NewInser/>
    <div className="flex flex-col align-middle items-center justify-evenly h-[100vh] md:pt-40 ">
        <div className="px-4 text-center rounded">
          <h1 style={color.C1} className=" py-8 px-2 rounded-xl text-xl font-black ">{lang.home.avatar}</h1>
        </div>
      <div className="">
      {
        loading ? (
          <>
            <h1>{lang.load}</h1>
          </>
        ):(
          <>
            <Pie
                data={chartData}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Your Income and Expens"
                  }
                }
              }}
            />
          </>
        )
      }
    </div>
    </div>
    </>
  );
}