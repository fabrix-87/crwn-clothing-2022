import { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-up-form.styles.scss'

//import { connect } from 'react-redux'
//import { signUpStart } from '../../redux/user/user.actions'
import { createAuthUserWithMailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

//const SignUpForm = ({signUpStart}) =>{
const SignUpForm = () =>{
    const [userDatas, setDatas] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = userDatas;
        
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Le due password non coincidono');
            return;
        }

        try{
            const {user} = await createAuthUserWithMailAndPassword(email, password);
            createUserDocumentFromAuth(user, { displayName });
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert ('Cannot create user, email already in use');
            }else{
                console.error('Errore nella creazione dell\'utente: ', error);
            }
        }        
        resetFormFields();
        //signUpStart(email, password, displayName);       
    }    

    const resetFormFields = () => {
        setDatas(defaultFormFields);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setDatas({...userDatas, [name]: value})        
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='E-Mail'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}
/*
const mapDispatchToState = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(
        signUpStart({email,password, displayName})
    )
})

export default connect(null,mapDispatchToState)(SignUpForm);
*/

export default SignUpForm;