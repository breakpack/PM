import styled from "styled-components";
import { Link } from "react-router-dom";

export const bottom_Bar = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #f5d042;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Linktag = styled(Link)`
  text-decoration: none;
  margin: 1vw;
  color: #0a174e;
  font-size: 100%;
  transition: all ease 0.3s;
  &:hover {
    font-size: 200%;
  }
`;
