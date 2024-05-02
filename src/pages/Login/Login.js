import * as s from '../Style/login.tsx';

function Login() {
  const buttonColor = (e) => {
    const buttonTag = e.currentTarget.children[0];
    buttonTag.style.color = "#2E282A"
  }
  const buttonColorOut = (e) => {
    const buttonTag = e.currentTarget.children[0];
    buttonTag.style.color = "#fff6e3"
  }

  return (
    <s.Wapper>
      <s.Form >
        <s.GoBack to='/'>←</s.GoBack>
        <s.H1>Login</s.H1>
        <s.InputWrapper>
          <s.Input type="text" name="ID" required></s.Input>
          <s.InputLabel for="ID">ID</s.InputLabel>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input type="password" name="PW" required></s.Input>
          <s.InputLabel for="PW"  >PW</s.InputLabel>
        </s.InputWrapper>
        <s.ForgetIDPW onClick={()=>{alert("아니 바보 멍청아 아이디 비번을 까먹냐 관리자한테 연락때릴테니까 기다려라 아오")}}>Forget your ID or PW?</s.ForgetIDPW>
        <s.Button type='submit' onMouseOver={(e)=>{buttonColor(e)}} onMouseOut={(e)=>{buttonColorOut(e)}}>
          <s.ButtonSpan>Let's Start</s.ButtonSpan>
        </s.Button>
      </s.Form>
    </s.Wapper>
  );
}

export default Login;
