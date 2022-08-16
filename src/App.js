import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.slice';
import { useDispatch } from 'react-redux';


const App = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( (user) => {
        if(user){
            createUserDocumentFromAuth(user);
            const currentUser = {
              displayName: user.displayName,
              email: user.email,
              uid: user.uid
            }
            dispatch(setCurrentUser(currentUser));
          }else{
            dispatch(setCurrentUser(undefined));
          }
    } )    

    return unsubscribe;
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
