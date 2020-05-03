import styled from 'styled-components';

const Input = styled.input.attrs({})`
  background: #eaeef5;
  color: #000;
  font-family: 'Montserrat';
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  border-radius: 5px;
  height: 2.9rem;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  &:active {
    background-color: #c44c4b;
  }

  &:focus,
  &:active {
    outline: none;
    border-color: #c50300;
    border-style: solid;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

export { Input, Label };
