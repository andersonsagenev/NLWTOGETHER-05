import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {

    const { user } = useAuth();
    return(
            <NavigationContainer>
              <AuthRoutes />
              {/* <SignIn /> */}
          
           
            {/* {
               user && user.id ? <AuthRoutes /> : <SignIn />
            } */}
            </NavigationContainer>
    )
}