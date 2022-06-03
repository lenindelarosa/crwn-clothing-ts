import styled from 'styled-components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormInput from '../form-input/form-input.component';

const mainColor = 'black';
const subColor = 'grey';


export const ShippingFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 0;
`;

export const CountrySelectorContainer = styled.div`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;  
`;

export const CustomCountryDropdown = styled(CountryDropdown)`
    font-size: 18px;
    font-weight: normal;
    left: 5px;
    top: 10px;
`;

export const CustomRegionDropdown = styled(RegionDropdown)`
    font-size: 18px;
    font-weight: normal;
    left: 5px;
    top: 10px;
`;

export const AddressContainer = styled.div`
    margin: 0px 0px !important; 
`;