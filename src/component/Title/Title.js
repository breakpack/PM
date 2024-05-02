import styles from './Title.module.css';

function App() {
  return (
    <div className={styles.wapper}>
      <div className={styles.Title}>Hi! This is PM</div>
      <div className={styles.Bar}></div>      
      <div className={styles.by}>Power by breakpack</div>   
    </div>
  );
}

export default App;
