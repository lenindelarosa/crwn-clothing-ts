import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'
//import { useNavigate } from 'react-router-dom'
import { emailSignInStart } from "../../store/user/user.action";
import { useDispatch } from 'react-redux';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    //const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log('Starting try.');
            dispatch(emailSignInStart(email, password));
        } catch (error){
            if(error.code === 'auth/wrong-password'){
                alert('Invalid username and password combination. ');
            } else {
                console.log(error)
            }
        }
        //navigate('/shop');
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
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