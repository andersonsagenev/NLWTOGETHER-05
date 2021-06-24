import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import  IlustrationImg  from '../../assets/illustration.png';

import { Background } from '../../components/Background';

export function SignIn(){

const navigation = useNavigation();

function handleSignIn() {
    navigation.navigate('Home');
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

            <ButtonIcon
                title=" Entrar com Discord"
                onPress={handleSignIn}
            />

            </View>
        </View>
    </ Background>
    );
}