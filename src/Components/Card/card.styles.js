import styled from "styled-components";
export const CardWrap = styled.div`
  padding: 50px 0;
  .card-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }
`;
export const Cardstyling = styled.div`
  width: 300px;
  padding: 20px;
  border: ${({ $bgclr }) => $bgclr && $bgclr};
  background: var(--white);
  
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  .title{
    padding-top: 10px;
  }
  .para {
    padding-top: 10px;
  }
`;
