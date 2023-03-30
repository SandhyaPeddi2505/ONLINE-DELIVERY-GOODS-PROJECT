import Login from './Components/Login';
import "./Login.scss";
import "./Signup.scss";
import "./OTP.scss";
import "./Changepassword.scss";
import "./Forgotpassword.scss";
import "./Profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import OTP from './Components/OTP';
import User from './Components/User';
import Changepassword from './Components/Changepassword';
import Profile from './Components/Profile';
import Forgotpassword from './Components/Forgotpassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/OTP' element={<OTP/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/changepassword' element={<Changepassword />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;