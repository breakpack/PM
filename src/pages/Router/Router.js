import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login'
import Main from '../Main/Main'
import Register from '../Register/Register'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Main />}></Route>
            <Route path="/login" element={< Login />}></Route>
            <Route path="/register" element={< Register />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
