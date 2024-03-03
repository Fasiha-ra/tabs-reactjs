import styled from "styled-components";
export const TabWrap = styled.div`
.container{
  display: flex;}
  /* background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  max-width: 100%; */
`;

export const Button = styled.button`
  background-color: ${({ $active }) => ($active ? "blue" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 15px;
  transition: all 0.3s ease-in;
`;

// export const TabContent = styled.div`
//   display: ${({ active }) => (active ? 'block' : 'none')};
// `;
