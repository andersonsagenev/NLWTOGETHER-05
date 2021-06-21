import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform, StatusBar, Alert } from 'react-native';
// import { LinearGradient }  from 'expo-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import  IlustrationImg  from '../../assets/illustration.png';



export function SignIn(){
    return(
    <View style={ styles.container }>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
         />
        <Image source={ IlustrationImg } style={ styles.image }
        resizeMode="stretch"/>

    <View style={ styles.content }>
        <Text style={ styles.title }>Inscreva seu {`\n`}
        TIME em nossas {`\n`}
       ligas facilmente 
        </Text>

        <Text style={ styles.subtitle }>
        Crie sua liga para disputar  {`\n`}
        com seus amigos
        </Text>

         <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7} />

        </View>
    </View>
    );
}