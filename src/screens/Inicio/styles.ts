import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    marginTop: getStatusBarHeight() + 26,
  },
  header: {
      width: '100%',
      paddingHorizontal: 24,
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 42
  },
  title: {
      color: COLORS.WHITE,
      fontSize: 34
  }
});