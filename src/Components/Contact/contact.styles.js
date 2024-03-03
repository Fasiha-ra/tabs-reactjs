import styled from "styled-components";
export const ContactStyling = styled.div`
padding: 50px 0;
form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    label{
        font-size: 20px;
    }
    .inputfield{
        border: none;
        outline: none;
        border-radius: 15px;
    }
    input{
        padding: 20px 10px;
    }
    textarea{
        resize: none;
        padding: 20px 10px;
    }
}
`;