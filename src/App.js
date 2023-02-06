import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './fonts/BKoodakBold.ttf';
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
import About from "./setting/About";
import Header from "./components/Header";

const colorA = {
  C1: {background: "#579BB1", color: '#F8F4EA'},
  C2: {background: "#E1D7C6", color: '#000'},
  C3: {background: "#ECE8DD", color: '#000'},
  C4: {background: "#F8F4EA", color: '#000'},
  C5: {background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
}

function App() {
  const [auth, setAuth] = useState(true);
  const [lang, setLang] = useState(En);
  const [color, setColor] = useState(colorA);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, []);
  
  return (
    <authContext.Provider 
    value={{ 
      setAuth, 
      auth,  
      lang, 
      setLang, 
      color, 
      setColor}}>
    <Router>
      <div className=" hidden md:grid">
        <Header />
      </div>
      <div style={color.C4} 
        className="relative md:hidden flex flex-col md:flex-wrap-reverse h-[100vh] font-koodak font-mono">
          
            <Routes>
             {
              !auth ? (
               <>
                  <Route path="/" element={<Wellcom/>}/>
                  <Route path="/register" element={<Register/>} /> 
                  <Route path="/login" element={<Login/>} />  
               </>
              ): (
                <>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/setting" element={<Settings />} />
                  <Route path="/report" element={<Report/>} />
                  <Route path="/group" element={<Groups />} />
                  <Route path="/insertData" element={<InsertData /> } />
                  <Route path="/theme" element={<Theme />} />
                  <Route path="/card" element={<Card />} />              
                  <Route path="/contents" element={<Contents/>} />   
                  <Route path="/lang" element={<Lang/> } />   
                  <Route path="/update" element={<Update/>} /> 
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/account" element={<Account />} />
                </>
              )
             }         
            </Routes>
         {
           auth &&  <div className="md:hidden"><Footer/></div> 
          }
      </div>
        <div className="hidden md:flex md:flex-col">
          <div className=" md:h-[calc(100vh-110px)] flex ">
            <Settings />
            <div className="hidden md:flex flex-col overflow-auto w-full max-w-[60vw] ">
              <Home/>
              <Report/>
              <Groups />
              <About/>
            </div>
              <div className=" md:w-full overflow-auto">
              <Routes>
             {
              auth ? (
               <>
                <Route path="/insertData" element={<InsertData /> } />
                <Route path="/theme" element={<Theme />} />
                <Route path="/card" element={<Card />} />              
                <Route path="/contents" element={<Contents/>} />   
                <Route path="/lang" element={<Lang/> } />   
                <Route path="/update" element={<Update/>} /> 
                <Route path="/profile" element={<Profile />} />
                <Route path="/account" element={<Account />} />
              </>
              ):(
                <>
                <Route path="/login" element={<Login/>} />          
                <Route path="/" element={<Wellcom/>}/>
              </>
              )
            }        
            </Routes>
              </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    </Router>
    </authContext.Provider>
  );
}

export default App;
