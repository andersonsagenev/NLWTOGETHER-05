import { getBottomSpace } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
       
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: getBottomSpace() + 32,
        
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        textAlign: 'center'
    }
})