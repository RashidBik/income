import { useState } from "react";
import {amount, deal, type} from "../utils/Data";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import Header from "../components/Header";
import { useContext } from "react";
import authContext from "../helper/AuthContext";
import NewInser from "../components/NewInser";


export default function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const userid = localStorage.getItem('userid');
  const [assets, setAssets] = useState({});
  const [chartData, setChartData] = useState();
  const [loading, setLoading] = useState(true); 
  const {lang, color} = useContext(authContext);
  

  useEffect(() => {
    fetch(`http://localhost:4000/api/user/content/${userid}`)
    .then((res)=> res.json())
    .then(({content, assets}) => {
      setAssets(assets)
      setLoading(false)
    })
    .catch(err => err);
    setChartData({
      labels: ['income', 'expens'], 
      datasets: [{data: [assets.income, assets.expens],
        backgroundColor: [
          "#78b778",
          "#f98080"
        ],
        borderColor: '#eee',
        borderWidth: 2
      }]
    })
  }, []);

  return (
    <>
    <Header />
    <NewInser/>
    <div className="flex flex-col align-middle items-center justify-evenly h-[100vh] ">
        <div className="px-4 text-center rounded">
          <h1 style={color.C1} className=" py-8 px-2 rounded-xl text-xl font-black ">{lang.home.avatar}</h1>
        </div>
      <div className="p-12">
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