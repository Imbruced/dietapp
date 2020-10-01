import { device } from "../../utils/device";
import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: #fff;
  position: fixed;
  width: 30%;
  height: 100%;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-80%")};
  transition: 0.2s;
  z-index: 998;
  box-shadow: ${({ theme }) => theme.shadow.normal};
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
