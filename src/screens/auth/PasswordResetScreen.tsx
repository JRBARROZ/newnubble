import React from 'react';
import Screen from '../../components/Screen/Screen';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import Button from '../../components/Button';
import {RootStackParamList} from '../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface PasswordResetScreen
  extends NativeStackScreenProps<RootStackParamList, 'PasswordResetScreen'> {}
function PasswordResetScreen({navigation: {reset}}: PasswordResetScreen) {
  function navigateToSuccessEmailScreen() {
    reset({
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params: {
            icon: {
              name: 'CheckRoundIcon',
              color: 'success',
            },
            title: 'Enviamos as instruções para o e-mail',
            description:
              'Clique no link enviado no seu e-mail para recuperar a senha',
          },
        },
      ],
    });
  }
  return (
    <Screen canGoBack>
      <Text variant="headingLarge">Esqueci minha senha</Text>
      <Text mb="s16">
        Digite seu e-mail e enviaremos as instruções para a redefinição de senha
      </Text>
      <TextInput label="e-mail" placeholder="Digite seu e-mail" />
      <Button mt="s16" onPress={navigateToSuccessEmailScreen}>
        Recuperar senha
      </Button>
    </Screen>
  );
}

export default PasswordResetScreen;
