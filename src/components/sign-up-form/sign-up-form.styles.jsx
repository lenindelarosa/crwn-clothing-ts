import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media only screen 
    and (min-device-width : 200px) 
    and (max-device-width : 480px) {
      width: 90%;
    }

    h2 {
        margin: 10px 0;
        font-size: min(max(20px, 2.5vw), 36px);
    }

    span {
        font-size: min(max(12px, 2vw), 22px);
    }
`;