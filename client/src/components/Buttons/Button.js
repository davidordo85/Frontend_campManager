/* import styled from 'styled-components';

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200;400&display=swap');
width: 200px;
 font-family: 'Yanone Kaffeesatz', sans-serif; 
 font-size: 25px;
 justify-content: center;
  height: 50px;
  border: none;
  border-radius: 30px;
  margin-right: 10px;
  

   &:hover {
    background-color: black;
    border: 1px solid white;
    border-radius: 30px;
    color: white;

    
 `;

export default Button; */

import styled from 'styled-components';

const accentColor = 'rgb(0, 0, 0)';

const Button = styled.button`
  margin: 0.5rem;
  align-items: center;
  background-color: ${props =>
    props.variant === 'primary' ? accentColor : 'lightgrey'};
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  color: ${props => (props.variant === 'primary' ? 'lightgrey' : accentColor)};
  cursor: pointer;
  display: inline-flex;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 25px;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${props =>
      props.variant === 'primary' ? 'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 1)'};
    color: white;
  }
`;

export default Button;
