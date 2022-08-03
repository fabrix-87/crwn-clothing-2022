import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up/sign-up-form.component'

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-and-sign-up'>
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
      <SignUpForm/>
    </div>


  );
};

export default SignIn;
