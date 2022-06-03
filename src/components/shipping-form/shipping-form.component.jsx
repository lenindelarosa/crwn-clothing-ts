import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { createUserAdress } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { 
    ShippingFormContainer, 
    CustomCountryDropdown, 
    CustomRegionDropdown, 
    CountrySelectorContainer, 
    AddressContainer,
    CustomFormInput,
    ValidateAddressButton
 } from './shipping-form.styles'

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
    const [isAddressValidated, setIsAddressValidated] = useState(false);
    const { country, region, fullName, streetAddress, cityName, zipCode, phoneNumber } = shippingAddress;
    const currentUser = useSelector(selectCurrentUser);

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

    const submitAddressHandler = (event) => {
        event.preventDefault();
        try {
            createUserAdress(currentUser, shippingAddress);
            setIsAddressValidated(true);
        } catch (error) {
            console.log('Address is invalid.')
        }
    }

    return(
        <ShippingFormContainer onSubmit={submitAddressHandler}>
            <CountrySelectorContainer>
                <CustomCountryDropdown
                    name="country"
                    value={country}
                    onChange={selectCountryHandler}
                    priorityOptions={["CA", "US", "GB"]} 
                    disabled={isAddressValidated} />
                <CustomRegionDropdown
                    name="region"
                    country={country}
                    value={region}
                    onChange={selectRegionHandler} 
                    disabled={isAddressValidated} />
            </CountrySelectorContainer>
            <AddressContainer>
                <FormInput disabled={isAddressValidated} required groupMargin={'0 px'} label="Full name" type="text" onChange={onChangeHandler} name="fullName" value={fullName}/>
                <FormInput disabled={isAddressValidated} required groupMargin={'0 px'} label="Street address" type="text" onChange={onChangeHandler} name="streetAddress" value={streetAddress}/>
                <FormInput disabled={isAddressValidated} required groupMargin={'0 px'} label="City name" type="text" onChange={onChangeHandler} name="cityName" value={cityName}/>
                <CustomFormInput disabled={isAddressValidated} required groupMargin={'0 px'} label="Zip code" type="number" onChange={onChangeHandler} name="zipCode" value={zipCode}/>
                <CustomFormInput disabled={isAddressValidated} required groupMargin={'0 px'} label="Phone number" type="number" onChange={onChangeHandler} name="phoneNumber" value={phoneNumber}/>
            </AddressContainer>
            <ValidateAddressButton disabled={isAddressValidated} buttonType={BUTTON_TYPE_CLASSES.inverted}> Validate address </ValidateAddressButton>
        </ShippingFormContainer>
    )
};

export default ShippingForm;