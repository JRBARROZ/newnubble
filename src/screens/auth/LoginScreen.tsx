import React from 'react';
import {Icon} from '../../components/Icon';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import Button from '../../components/Button';
import Screen from '../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/Routes';
import {Pressable} from 'react-native';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

function LoginScreen({navigation: {navigate}}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigate('SignUpScreen');
  }

  function navigateToPassScreen() {
    navigate('PasswordResetScreen');
  }

  return (
    <Screen>
      <Text variant="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text variant="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="Amazing"
        placeholder="here"
        errorMessage="aaa"
        RightComponent={<Icon name="EyeOff" />}
        BoxProps={{
          marginBottom: 's12',
        }}
      />
      <TextInput label="Testing" />
      <Pressable onPress={navigateToPassScreen}>
        <Text color="primary" variant="paragraphLarge" bold mt="s12">
          Esqueci minha senha
        </Text>
      </Pressable>
      <Button mt="s48">Entrar</Button>
      <Button variant="outline" mt={'s12'} onPress={navigateToSignUpScreen}>
        Criar uma conta
      </Button>
    </Screen>
  );
}

export default LoginScreen;
