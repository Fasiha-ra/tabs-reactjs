import styled from "styled-components";
export const BlogWrap = styled.div`
  padding: 50px 0;
  .card {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .blog {
    margin-top: 20px;
    padding: 10px 20px;
    width: 500px;
    background-color: var(--primary);
    border: 2px solid red;
    text-align: start;
    border-radius: 20px;
    .bImg{
        width: 100px;
        border-radius: 50%;
        border: 2px solid pink;
        margin: 0 auto;
    }
  }
`;
