import styled, {css} from "styled-components";
export const StyledButton = styled.button`
  min-width: 132px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 10px;
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 82px;
  background: var(--primary);
  outline: none;
  border: none;
  transition: 0.3s all ease-in-out;
  &:hover{
   box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.5);
   background-color: var(--gray-50);
   color: var(--black);
  }
  /* background-color: ${props => props.active ? 'lightblue' : '#ddd'}; */
${({$dark})=>
$dark && css`
background-color: var(--black);
color: var(--white);
`}
  `;