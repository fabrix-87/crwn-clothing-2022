import SignUpForm from '../../components/sign-up/sign-up-form.component'
import SignInForm from '../../components/sign-in/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='sign-in-and-sign-up'>      
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
