import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login'
import Main from '../Main/Main'
import Register from '../Register/Register'
import BoardMain from '../Board/BoardMain'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Main />}></Route>
            <Route path="/login" element={< Login />}></Route>
            <Route path="/register" element={< Register />}></Route>
            <Route path="/BoardMain" element={< BoardMain />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
