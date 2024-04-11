import styled, { keyframes } from "styled-components";

export const Fadein = keyframes`
    from{opacity: 0;}
    to{opacity: 1;}
`;

export const Wapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2e282a;
`;

export const Form = styled.form`
  animation: ${Fadein} 0.8s forwards;
  display: flex;
  height: 80%;
  width: 50%;
  background-color: #cd5334;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  display: flex;
  top: 30%;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 400%;
  color: #fad8d6;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 40%;
  height: 7%;
  background-color: pink;
  border: 1px solid black;
`;

export const InputId = styled.input`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  border-width: 0;
  display: block;
  &:focus {
    border: none;
  }
`;
export const InputPw = styled.input`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  border-width: 0;
  display: block;
  &:focus {
    border: none;
  }
`;

export const Button = styled.button`
  margin: 5vh 0 0 0;
  width: 20vw;
  height: 5vh;
  border-radius: 30em;
  border: none;
  background-color: #7e3e2f;
  color: white;
  font-size: 120%;
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 80vw;
    height: 80vw;
    background-color: #edb88b;
    transition: all ease 0.8s;
    transform: translateX(-110%) translateY(-30%) rotate(45deg);
  }

  &:hover::after {
    transform: translateX(-80%) translateY(-30%) rotate(45deg);
  }
`;
export const ButtonSpan = styled.span`
  z-index: 5;
  position: absolute;
  font-size: 170%;
  color: #fad8d6;
  transform: translateX(-50%) translateY(-50%);
`;
