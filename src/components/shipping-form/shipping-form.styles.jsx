import styled from 'styled-components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

export const ShippingFormContainer = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 50px auto 0;
`;

export const CountrySelectorContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10% ;
    margin-bottom: 25px;
`;

export const ZipCodeAndNumberContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10% ;
    margin-bottom: 25px;
    margin: 0px 0px !important; 
`;

export const CustomCountryDropdown = styled(CountryDropdown)`
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
    padding: 5px;
`;

export const CustomRegionDropdown = styled(RegionDropdown)`
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
    padding: 5px;
`;

export const AddressContainer = styled.div`
    margin: 0px 0px !important; 
`;

export const CustomFormInput = styled(FormInput)`
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;

export const ValidateAddressButton = styled(Button)`
    :disabled,
    [disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
`;