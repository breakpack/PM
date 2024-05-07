import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Fadein = keyframes`
    from{opacity: 0;}
    to{opacity: 1;}
`;

export const GoBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  top: -20%;
  left: -45%;
  font-size: 300%;
  width: 5vh;
  height: 5vh;
  color: white;
  transition: all ease 0.3s;
  &:hover {
    font-size: 330%;
  }
`;
export const GoBack1 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  top: -10%;
  left: -45%;
  font-size: 300%;
  width: 5vh;
  height: 5vh;
  color: white;
  transition: all ease 0.3s;
  &:hover {
    font-size: 330%;
  }
`;
export const ForgetIDPW = styled(Link)`
  position: relative;
  bottom: -30%;
  color: white;
  text-decoration: none;
  font-size: 110%;
  &:hover {
    text-decoration: underline;
  }
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
  color: #ffffff;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 40%;
  height: 7%;
`;

export const InputLabel = styled.label`
  position: absolute;
  font-size: 200%;
  transition: all ease 0.2s;
  color: white;
`;

export const Input = styled.input`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  display: block;
  border: none;
  border-bottom: 3px solid;
  font-size: 200%;
  color: white;
  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    font-size: 100%;
    margin-bottom: 3%;
  }
  &:valid ~ ${InputLabel} {
    font-size: 100%;
    margin-bottom: 3%;
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
    background-color: #fff6e3;
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
  color: #fff6e3;
  transform: translateX(-50%) translateY(-50%);
`;
