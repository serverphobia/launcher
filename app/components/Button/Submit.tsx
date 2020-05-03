import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Start',
})`
  background: #c44c4b;
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  border-radius: 5px;
  height: 3.3rem;
  border-color: transparent;
  box-shadow: 0px;
  outline: none !important;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #c50300;
  }
`;

export default Submit;
