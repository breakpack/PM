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

  const Pwinvalid = (e)=>{
    const inputvalue = e.currentTarget.value;
    const passwordReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    
    if(passwordReg.test(inputvalue) !== true){
      console.log(passwordReg.test(inputvalue));
    }
  }

  return (
    <s.Wapper>
      <s.Form >
        <s.GoBack1 to='/'>←</s.GoBack1>
        <s.H1>Register</s.H1>
        <s.InputWrapper>
          <s.Input type="text" name="ID" required></s.Input>
          <s.InputLabel for="ID">ID</s.InputLabel>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input type="password" name="PW" required onChange={(e)=>{Pwinvalid(e)}}></s.Input>
          <s.InputLabel for="PW">PW</s.InputLabel>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input type="password" name="PWC" required></s.Input>
          <s.InputLabel for="PWC">PW Check</s.InputLabel>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input type="text" name="email" required></s.Input>
          <s.InputLabel for="email">Email</s.InputLabel>
        </s.InputWrapper>
        <s.Button type='submit' onMouseOver={(e)=>{buttonColor(e)}} onMouseOut={(e)=>{buttonColorOut(e)}}>
          <s.ButtonSpan>Let's Start</s.ButtonSpan>
        </s.Button>
      </s.Form>
    </s.Wapper>
  );
}

export default Login;
