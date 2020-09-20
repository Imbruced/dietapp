import styled from "styled-components";
import { device } from "../../utils/device";

export const LoginFormStyled = styled.div`
  display: flex;
  height: 100;
  flex-direction: column;
  background-color: #ffffff;
  margin: 15px 0 50px;
  padding: 15px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  h2 {
    background-color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .login-subheader.large {
    font-size: 25px;
    font-weight: bold;
    margin-top: 0;
    @media ${device.tablet} {
      font-size: 28px;
    }
  }
  .login-subheader {
    text-align: center;
    margin: 15px 0;
    color: #97bf04;
    font-size: 18px;
    font-family: "DIN Alternate";
    @media ${device.tablet} {
      font-size: 22px;
    }
  }
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #97bf04;
    font-size: 18px;
    font-family: "DIN Alternate";
  }
  .label-text {
    display: block;
    width: 40%;
    text-align: right;
    @media ${device.tablet} {
      font-size: 22px;
    }
  }
  input {
    margin: 10px;
    padding: 10px;
    width: 60%;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    color: #97bf04;
    font-family: "Courier";
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    transition: 0.3s;
    @media ${device.tablet} {
      font-size: 26px;
    }
  }
  input:focus {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  }
  .submit {
    display: block;
    margin: 0 auto;
  }
`;
