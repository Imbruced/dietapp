import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 7vh;
  height: 7vh;
  top: 5vw;
  left: 5vw;
  align-items: center;
  position: absolute;
  border-radius: 25%;
  z-index: 9999;
  padding: 1px;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
  div {
    width: 30px;
    height: 5px;
    position: relative;
    background: black;
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    transition: transform 0.5s ease;
    ::before,
    ::after {
      height: 5px;
      position: absolute;
      content: "";
      display: block;
      background: black;
      transition: transform 0.5s ease;
    }
    ::before {
      width: 30px;
      left: 0px;
      top: ${(props) => (props.open ? "0" : "-1.5vh")};
    }
    ::after {
      width: 30px;
      left: 0px;
      top: ${(props) => (props.open ? "0" : "1.5vh")};
      transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0)")};
      transform-origin: center;
    }
  }
`;
