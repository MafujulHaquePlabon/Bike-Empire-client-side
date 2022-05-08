
import './App.css';

import { Route, Routes } from 'react-router';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path='/Services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route> */}
        <Route path="/Blogs" element={<Blog></Blog>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/Manage_Items" element={<SignUp></SignUp>}></Route>
        <Route path="/Add_Item" element={<SignUp></SignUp>}></Route>
        <Route path="/My_items" element={<SignUp></SignUp>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
