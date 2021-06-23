import React from 'react';
import { Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';


export function GuildIcon(){
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBV_WbiPvqRSPgpNSCrLwXE4li3bqHoEQMg&usqp=CAU'
    return(
        <Image style={styles.image}
            source={ { uri }}
            resizeMode="cover"
        />
    );
}