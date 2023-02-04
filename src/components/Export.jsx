import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

const Export = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0)
    const [load, setLoad] = useState(null);
    const userid = localStorage.getItem('userid');
    let bar = 0
    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/api/user/content/${userid}`,
            onDownloadProgress(progressEvent){
                bar = Math.round((progressEvent.loaded / progressEvent.total)*100)
                setProgress(bar)
            }
        })
        .then(data => data.data)
        .then(result => setData(result.content))
        .catch(err => setError(err))
    }, []);
console.log(data);
// const arr = [
//     {
//         id: data.user.contents._id,
//         type: data.user.contents.type,
//         amount: data.user.contents.amount,
//         group: data.user.contents.group,
//         deal: data.user.contents.deal,
//         date: data.user.contents.date,
//         report: data.user.contents.report,
//         updateAt: new Data(data.user.contents.updatedAt)

//     }
// ]
  return (
    <div>
    <div>
    {
        data && <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    }
    </div>
    <div>
        {

         data ?  <CSVLink data={data} filename={"income.csv"} target="_blank">Download</CSVLink>: <p>loading</p>
        
        }
    </div>
    </div>
  )
}

export default Export
