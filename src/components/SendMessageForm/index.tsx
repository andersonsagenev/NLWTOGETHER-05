import React, { useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { api_git } from '../../services/api';
import { COLORS } from '../../theme';
import { BtnColor } from '../BtnColor';

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormatted = message.trim();
       

        if (messageFormatted.length > 0) {
            setSendingMessage(true);
            console.log('entrou no envio', messageFormatted)
            await api_git.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);
            Alert.alert('Mensagem enviada com sucesso!');
        } else {
            Alert.alert('Escreva a mensagem para enviar.')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                keyboardAppearance='dark'
                placeholder="Qual sua expectativa para o evento"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendingMessage}
            />

            <BtnColor
                title="ENVIAR MENSAGEM"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit} />

        </View>
    );
}

export default SendMessageForm;