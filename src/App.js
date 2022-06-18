import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar/SideBar';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Today from './components/today/Today';
import Tomorrow from './components/tomorrow/Tomorrow';
import Personal from './pages/personal/Personal';
import { AllList } from './pages/allList/AllList';
import Home from './pages/home/Home';
import Office from './pages/office/Office';
import Overdue from './components/overdue/Overdue';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <div className="alldata">
      <SideBar/>
      <Routes>
        <Route exact path ="/" element={<AllList/>} />
        <Route exact path ="/tomorrow" element={<Tomorrow/>} />
        <Route exact path ="/overdue" element={<Overdue/>} />
        <Route exact path ="/personal" element={<Personal/>} />
        <Route exact path ="/home" element={<Home/>} />
        <Route exact path ="/office" element={<Office/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
