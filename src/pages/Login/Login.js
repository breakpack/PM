import * as s from '../Style/login.tsx';

function Login() {
  const buttonColor = (e) => {
    const buttonTag = e.currentTarget.children[0];
    buttonTag.style.color = "#2E282A"
  }
  const buttonColorOut = (e) => {
    const buttonTag = e.currentTarget.children[0];
    buttonTag.style.color = "#fad8d6"
  }

  return (
    <s.Wapper>
      <s.Form >
        <s.H1>Login</s.H1>
        <s.InputWrapper>
          <s.InputId type="text"></s.InputId>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.InputPw type="password"></s.InputPw>
        </s.InputWrapper>
        <s.Button type='submit' onMouseOver={(e)=>{buttonColor(e)}} onMouseOut={(e)=>{buttonColorOut(e)}}>
          <s.ButtonSpan>Let's Start</s.ButtonSpan>
        </s.Button>
      </s.Form>
    </s.Wapper>
  );
}

export default Login;
