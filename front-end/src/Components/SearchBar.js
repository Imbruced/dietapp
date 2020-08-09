import React, { Component } from "react";
import styled from "styled-components";

const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  height: 25vh;
  background-color: #97bf04;
  color: #f2f2f2;
  font-family: "DIN Alternate";
  font-size: 25px;
  line-height: 29px;
  input {
    padding: 10px;
    width: 75vw;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    color: #97bf04;
    font-family: "Courier";
  }
  input::placeholder {
    color: #c7c7c7;
  }
`;

const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <form>
        <input
          type="text"
          value={props.value}
          onChange={props.changeHandler}
          placeholder="Wpisz nazwę produktu"
        />
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (event) => {
//     alert("Podano następujące imię: " + this.state.value);
//     event.preventDefault();
//   };
//   render() {
//     return (
//       <SearchBarStyled>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//             placeholder="Wpisz nazwę produktu"
//           />
//         </form>
//       </SearchBarStyled>
//     );
//   }
// }

// export default SearchBar;
