import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { Background } from '../../components/Background';

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView( { children, closeModal, ...rest }: Props) {
    return (
        <Modal 
            transparent
            statusBarTranslucent
            animationType="slide"
            {...rest}
        >
        <TouchableWithoutFeedback 
            style={ styles.overlay } 
            onPress={closeModal}>
            <View style={styles.container}>
                <Background>
                    <View style={styles.bar} />
                    {children}
                </Background>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
    );
}