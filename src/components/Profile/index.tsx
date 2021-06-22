import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import { styles } from './styles';
import { Avatar } from '../../components/Avatar';


export function Profile(){
    return(
        <View style={styles.container}>

        <Avatar urlImage="https://github.com/andersonsagenev.png" />

            <View>
             <View style={styles.user}>
                <Text style={styles.greeting }>
                Olá
                </Text>
                <Text style={styles.username }>
                Anderson
                </Text>
             </View>
             <Text style={styles.message }>
                Hoje e dia de Vitória
                </Text>

            </View>

        </View>
    );
}