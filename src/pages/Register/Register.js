import styles from './Register.module.css'

function Register() {
  return (
    <div className={styles.wapper}>
      <form className={styles.form}>
        <h1>Register</h1>
        <div className={styles.id}>
          <input type="text"></input>
        </div>
        <div className={styles.pw}>
          <input type="password"></input>
        </div>
      </form>
    </div>
  );
}

export default Register;
