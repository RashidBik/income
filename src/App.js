import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Report from './pages/Report';
import Groups from './pages/Groups';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Wellcom from "./pages/Wellcom";
import Card from './components/Card';
import Footer from "./components/Footer";
import InsertData from "./components/InsertData";
import Contents from "./components/Contents";
import Settings from './setting/Settings';
import Account from "./setting/Account";
import Profile from "./setting/Profile";
import Theme from "./setting/Theme";
import Update from "./setting/Update";
import { useEffect, useState } from "react";
import authContext from "./helper/AuthContext";
import {Farsi} from './languages/Farsi';
import {En} from './languages/En';
import Lang from "./components/Lang";

const colorA = {
  C1: {background: "#579BB1", color: '#F8F4EA'},
  C2: {background: "#E1D7C6", color: '#000'},
  C3: {background: "#ECE8DD", color: '#000'},
  C4: {background: "#F8F4EA", color: '#000'}
}

function App() {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [lang, setLang] = useState(Farsi);
  const [color, setColor] = useState(colorA);
  useEffect(() => {
    const userid = localStorage.getItem('userid');
    if (userid) {
      setAuth(true)
    } else {
      setAuth(false)
    }
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   setAdmin(true)
    // } else {
    //   setAdmin(false)
    // }
  }, []);
  
  return (
    <authContext.Provider 
    value={{
      setAdmin, 
      setAuth, 
      auth, 
      admin, 
      lang, 
      setLang, 
      color, 
      setColor}}>
    <Router>
      <div style={color.C4} 
        className="relative flex flex-col h-[100vh]">
            <Routes>
              <Route path="/register" element={<Register/>} />  
             {
              auth ? (
               <>
                <Route path="/home" element={<Home/>} />
                <Route path="/setting" element={<Settings />} />
                <Route path="/report" element={<Report/>} />
                <Route path="/group" element={<Groups />} />
                <Route path="/insertData" element={<InsertData /> } />
                <Route path="/theme" element={<Theme />} />
                <Route path="/card" element={<Card />} />              
                <Route path="/contents" element={<Contents/>} />   
                <Route path="/lang" element={<Lang/> } />   
                  {
                    admin ? (
                    <>
                      <Route path="/update" element={<Update/>} /> 
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/account" element={<Account />} />
                    </>
                    ):(
                      <>
                      <Route path="/login" element={<Login/>} />          
                    </>
                    )
                  }
               </>
              ): (
                <Route path="/" element={<Wellcom/>}/>
              )
             }         
            </Routes>
         {
          (auth || admin) &&  <Footer/> 
         }
      </div>
    </Router>
    </authContext.Provider>
  );
}

export default App;