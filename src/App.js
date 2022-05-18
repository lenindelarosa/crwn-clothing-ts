import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Home from "./routes/home/home.component";
import Navigaton from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

import { 
  onAuthStateChangedListener,
  crearUserDocumentFromAuth
} from "././utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener(( user ) => { 
        if (user) {
            crearUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
}, []); // we only get 1 dispatch for redux and it does not change! But to remove the react warning
//you need to put dispatch in the effect. 

  return (
    <Routes >
      <Route path='/' element={<Navigaton />} >
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App;
