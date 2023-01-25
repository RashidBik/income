import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Card from './components/Card';
import Report from './pages/Report';
import Groups from './pages/Groups';
import Settings from './setting/Settings';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Account from "./setting/Account";
import InsertData from "./components/InsertData";
import Profile from "./setting/Profile";
import Theme from "./setting/Theme";
import Update from "./setting/Update";
import Contents from "./components/Contents";

function App() {

  return (
    <Router>
      <div className="relative flex flex-col h-[100vh] ">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/report" element={<Report/>} />
              <Route path="/group" element={<Groups />} />
              <Route path="/insertData" element={<InsertData /> } />
              <Route path="/account" element={<Account />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="/update" element={<Update />} />
              <Route path="/card" element={<Card />} />              
              <Route path="/contents" element={<Contents/>} />              
            </Routes>
              {window.document.location.path !== '/insertData' ? (
                <Link to="/insertData">
                  <span className="fixed bottom-20 right-9 z-10 h-12 w-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl text-gray-50 border border-gray-400">+</span>
                </Link>
              ): ''}

          <Footer/>
      </div>
    </Router>
  );
}

export default App;
