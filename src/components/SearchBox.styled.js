import styled from "styled-components";


export const Input = styled.input`
padding: 13px 20px;
width: 300px;
border-radius: 4px;
font-size: 20px;
color: green;
border: 2px solid green;
background-color: white;
:focus {
  box-shadow: 0px 0px 0px 1px white;
}
`;

export const Form=styled.form`

margin-bottom: 20px;
margin-top: 15px;
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
}

`;

export const Button = styled.button`
  padding: 12px 13px;
  font-weight: 700;
  font-size: 22px;
  border-radius: 4px;
  border: 2px solid green;
  border-radius: 4px;
  text-decoration: none;
  color: red;
  background-color: white;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus-visible {
    color: white;
    background-color: orangered;
  }
  :focus {
    box-shadow: 0px 0px 0px 1px white;
  }
`;