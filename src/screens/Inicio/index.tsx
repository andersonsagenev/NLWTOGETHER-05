
import React from 'react';
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

 import { styles } from './styles';

 import { HeaderTwo } from '../../components/HeaderTwo';
 import { MessageList } from '../../components/MessageList';
 import { SigInBox } from '../../components/SignInBox';
 import { SendMessageForm } from '../../components/SendMessageForm';
import { useAuth } from '../../hooks/auth';

 

export function Inicio(){
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView style={ {flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
      <View style={styles.container}>
          <HeaderTwo />
          <MessageList />
          { user ? <SendMessageForm /> : <SigInBox /> }
      </View>
      </KeyboardAvoidingView>
  );
}

export default Inicio;