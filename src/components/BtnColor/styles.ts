import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.BOLD,
        fontSize: 15,
        textAlign: 'center'
    },
    icon: {
        marginRight: 12
    }
})