
import './App.css';
import NavBar from './Layouts/NavBar';
import Footer from './Layouts/Footer';
import {Routes,Route} from "react-router-dom";
import Home from './Screens/Home';
import About from './Screens/About.jsx'
import OurBlog from './Screens/OurBlog';
import CausesCampaign from './Screens/CausesCampaign'
import Contact from './Screens/Contact'
function App() {
  return (
    <div >
 
 <NavBar></NavBar>
    <Routes>

    <Route path="/" element={<Home/>} />
   
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="causesCampaign"  element={<CausesCampaign/>}/>
        <Route path="blog" element={<OurBlog/>} />
        <Route path="contact" element={<Contact/>} />
        
 
  </Routes>
  <Footer></Footer>
  </div>
  );
}

export default App;
