import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'
//import { useNavigate } from 'react-router-dom'
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { useDispatch } from 'react-redux';
//import { getCurrentUser } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    //const navigate = useNavigate();
    
    const submitHandler = async (event) => {
    event.preventDefault();
        try {
            dispatch(emailSignInStart(email, password));
            // const currentUser = await getCurrentUser();
            // console.log(currentUser);
            // if (currentUser){
            //     navigate('/shop');
            // }
        } catch (error) {
            console.log('user sign in failed', error);
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
        // const currentUser = getCurrentUser();
        // if (currentUser){
        //     navigate('/shop');
        // }
      };

    return (
        <SignInContainer>
        <h2>I already have an account</h2>
        <span>
            Sign in with your email and password.
        </span>
        <form onSubmit={submitHandler}>
            <FormInput label="Email" type="email" required onChange={onChangeHandler} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password}/>
            <ButtonsContainer>
                <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign In</Button>
                <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign In</Button>
            </ButtonsContainer>
        </form>
    </SignInContainer>
    )
};

export default SignInForm;