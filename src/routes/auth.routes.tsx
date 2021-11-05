import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Inicio } from '../screens/Inicio';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetail } from '../screens/AppointmentDetail';
import { AppointmentCreate } from '../screens/AppointmentCreate';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
            >
         <Screen
            name="Home"
            component={Home}
        />     
        <Screen
            name="Inicio"
            component={Inicio}
        />
        <Screen
            name="AppointmentDetail"
            component={AppointmentDetail}
        />
        <Screen
            name="AppointmentCreate"
            component={AppointmentCreate}
        />
        </Navigator>
    )
}