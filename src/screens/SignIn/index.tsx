import React, { useContext } from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import  IlustrationImg  from '../../assets/illustration.png';

import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';


export function SignIn(){

const { loading, signIn } = useAuth();
//const navigation = useNavigation();
//console.log(user);

async function handleSignIn() {
    try {
       await signIn();
    } catch (error) {
      // Alert.alert(error); 
    }
}

    return(
    <Background>
        <View style={ styles.container }>
            <Image source={ IlustrationImg } style={ styles.image }
            resizeMode="stretch"/>

        <View style={ styles.content }>
            <Text style={ styles.title }>Inscreva seu {`\n`}
            TIME de forma {`\n`}
        fácil!
            </Text>

            <Text style={ styles.subtitle }>
            Crie sua liga para disputar  {`\n`}
            com seus amigos
            </Text>
            {
                loading ? <ActivityIndicator color={theme.colors.primary} />
                :
                <ButtonIcon
                title=" Entrar com Discord"
                onPress={handleSignIn}
                /> 
            }
            </View>
        </View>
    </ Background>
    );
}