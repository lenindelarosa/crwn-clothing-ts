import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    width: 30vw;

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
        font-size: min(max(14px, 2vw), 22px);
    }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen 
    and (min-device-width : 200px) 
    and (max-device-width : 480px) {
      width: 100%;
    }

  button {
    display: inline-block;
  }
  
`;