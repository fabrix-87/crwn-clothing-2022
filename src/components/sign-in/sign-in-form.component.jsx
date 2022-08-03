import { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss'
//import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
//import { connect } from 'react-redux';
import { signInWithGooglePopup, signInAuthUserWithMailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: ''
}

//const SignInForm = ({emailSignInStart, googleSignInStart}) => {
const SignInForm = () => {
    const [userCredentials, setCredentials] = useState(defaultFormFields);       
    const {email, password} = userCredentials;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();        
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await signInAuthUserWithMailAndPassword(email, password)
            resetFormFields();
        }catch(error){   
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Password errata');
                    break;
                case 'auth/user-not-found':
                    alert('Utente non trovato');
                    break;
                default:
                    console.error('Errore nella creazione dell\'utente: ', error);
            }   
        }             
    }

    const resetFormFields = () => {
        setCredentials(defaultFormFields);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value})        
    }

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your e-mail and password.</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='E-Mail'
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    required 
                    handleChange={handleChange}
                    label='Password'
                />               
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton 
                        customClass="google-sign-in" 
                        onClick={signInWithGoogle} 
                        type="button">Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );

}

/*
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
  })

export default connect(null, mapDispatchToProps)(SignIn)
*/

export default SignInForm;