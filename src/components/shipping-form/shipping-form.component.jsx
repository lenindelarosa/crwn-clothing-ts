import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component'
import { ShippingFormContainer, CustomCountryDropdown, CustomRegionDropdown, CountrySelectorContainer, AddressContainer } from './shipping-form.styles'

const defaultShippingAddress = {
    country: '',
    region: '',
    fullName: '',
    streetAddress: '',
    cityName: '',
    zipCode: '',
    phoneNumber: ''
}

const ShippingForm = () => {

    const [shippingAddress, setShippingAddress] = useState(defaultShippingAddress);
    const { country, region, fullName, streetAddress, cityName, zipCode, phoneNumber } = shippingAddress;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setShippingAddress({ ...shippingAddress, [name]: value});
        console.log(shippingAddress);
    };

    const selectCountryHandler = (value) => {
        setShippingAddress({ ...shippingAddress, country: value });
    }

    const selectRegionHandler = (value) => {
        setShippingAddress({ ...shippingAddress, region: value});
        console.log(shippingAddress);
    }
    return(
        <ShippingFormContainer>
        {/* <CountrySelectorContainer> */}
            <CustomCountryDropdown
                name="country"
                value={country}
                onChange={selectCountryHandler}
                priorityOptions={["CA", "US", "GB"]} />
            <CustomRegionDropdown
                name="region"
                country={country}
                value={region}
                onChange={selectRegionHandler} />
        {/* </CountrySelectorContainer> */}
        <AddressContainer>
            <FormInput required groupMargin={'0 px'} label="Full name" type="text" onChange={onChangeHandler} name="fullName" value={fullName}/>
            <FormInput required groupMargin={'0 px'} label="Street address" type="text" onChange={onChangeHandler} name="streetAddress" value={streetAddress}/>
            <FormInput required groupMargin={'0 px'} label="City name" type="text" onChange={onChangeHandler} name="cityName" value={cityName}/>
            <FormInput required groupMargin={'0 px'} label="Zip code" type="number" onChange={onChangeHandler} name="zipCode" value={zipCode}/>
            <FormInput required groupMargin={'0 px'} label="Phone number" type="number" onChange={onChangeHandler} name="phoneNumber" value={phoneNumber}/>
        </AddressContainer>
        </ShippingFormContainer>
    )
};

export default ShippingForm;