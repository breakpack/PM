import s from './Bar.module.css';
import { Link } from 'react-router-dom';

function Bar() {
  return (
    <div className={s.bottom_Bar}>
        <Link to='/login' className={s.link}>Login</Link>
        <Link to='/register' className={s.link}>Register</Link>
    </div>
  );
}

export default Bar;
