import styled from "styled-components";
export const AboutWrap = styled.div`
  padding: 50px 0;
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 1200px) {
      flex-wrap: nowrap;
    }

    .contentWrap {
       p {
        font-size: 16px;
        line-height: 20px;

        max-width: 800px;

        @media (min-width: 768px) {
          font-size: 18px;
          line-height: 23px;
        }
      }
    }

    /* .about-img img {
      max-width: 500px;
    } */
  }
`;
