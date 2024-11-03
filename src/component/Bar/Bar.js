import * as s from "../CPstyle/Bar.tsx";

function Bar() {
  return (
    <s.bottom_Bar>
      <s.Linktag to="/login">Login</s.Linktag>
      <s.Linktag to="/register">Register</s.Linktag>
    </s.bottom_Bar>
  );
}

export default Bar;
