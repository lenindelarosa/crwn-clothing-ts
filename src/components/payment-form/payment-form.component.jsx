import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartTotal } from "../../store/cart/cart.selector";
import FormInput from "../form-input/form-input.component";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { clearCartItems } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [nameOnCard, setNameOnCard] = useState('');

    const amount = useSelector(selectCartTotal);

    const paymentHandler = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret }} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: nameOnCard ? nameOnCard : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false);

        if (paymentResult.error){
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment was successful!');
                dispatch(clearCartItems());
                navigate('/order-confirmation');
            }
        }
    };

    const changeHandler = (event) => {
        const { value } = event.target;
        setNameOnCard(value);
    }

    return (
        <PaymentFormContainer>
            <h2>Credit Card Payment</h2>
            <FormContainer onSubmit={paymentHandler}>
                <FormInput required label="Name on card" type="text" onChange={changeHandler} name="nameOnCard" value={nameOnCard}/>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;