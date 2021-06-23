import React from 'react';
import { RectButton, RectButtonProps } from  'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { theme } from '../../global/styles/theme';

type props =  {
    title: string;
    subtitle: string;
}


export function ListHeader( { title, subtitle } : Props) {
   
    return (
          <View style={ styles.container }>
                <Text style={styles.title}>
                    { title }
                </Text>
                <Text style={styles.subtitle}>
                    { subtitle }
                </Text>
        </View>          
    )
}