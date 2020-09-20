import { device } from "../../utils/device";
import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: #fff;
  position: fixed;
  width: 60%;
  height: 100%;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-80%")};
  transition: 0.2s;
  z-index: 998;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  @media ${device.laptop} {
    grid-area: menu;
    left: 0;
    width: 25%;
  }
  .menu-list {
    list-style: none;
    margin: 20vh 5vw;
  }
`;
