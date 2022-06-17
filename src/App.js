import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar/SideBar';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Today from './components/today/Today';
import Tomorrow from './components/tomorrow/Tomorrow';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <div className="alldata">
      <SideBar/>
      <Routes>
        <Route exact path ="/" element={<Today/>} />
        <Route exact path ="/tomorrow" element={<Tomorrow/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
