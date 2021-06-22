import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
      width: '100%',
      paddingHorizontal: 24,
      marginTop: getStatusBarHeight() + 26,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 42
  },
});