import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid darkgrey;
    margin: 10px 30px;
    min-width: 400px;

  h2 {
    font-size: min(max(20px, 2.5vw), 36px);
  }
`;

export const FormContainer = styled.form`
    width: 100%;
    justify-content: center;
    height: 100px;
    margin: 10px 10px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;