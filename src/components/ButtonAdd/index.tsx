import { RectButton, RectButtonProps } from  'react-native-gesture-handler';
import React from 'react';
import { Text, Image, View } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';


type Props = RectButtonProps & {
    title: string;
}

export function ButtonAdd( {...rest} : RectButtonProps ) {
    return (
        <RectButton style={ styles.container} 
        { ...rest }>
           <MaterialCommunityIcons
              name="plus"
              color={theme.colors.heading}
              size={24}
               />
        </RectButton>

    )
}